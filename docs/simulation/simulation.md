# Simulation {#chap:simulation}

## Structure of GKV {#sec:structure-of-gkv}

<span style="color: red">NOTE: This explanation is based on the GKV version
gkvp_f0.48.</span>
When one expands the GKV package, there are

-   `gkvp_f0.48/`

    -   `README_for_namelist.txt`

    -   `Version_memo.txt`

    -   `src/`

        -   `gkvp_f0.48_header.f90` (Module for setting grid resolutions
            and MPI processes)

        -   `gkvp_f0.48_out.f90` (Module for data output)

        -   \...

    -   `lib/`

        -   \... (contains libraries for random number and Bessel
            functions)

    -   `extra_tools/`

        -   `fig_stdout.tar.gz` (creates a PDF file for visualizing
            standard ASCII output)

        -   `v29diag.tar.gz` (Post processing program for analyzing
            standard BINARY output)

        -   \...

    -   `run/`

        -   `gkvp_f0.48_namelist` (Namelist for setting physical plasma
            parameters)

        -   `sub.q` (Batch script, depending on machines)

        -   `shoot` (Script for submitting jobs, depending on machines)

        -   `Makefile` (depending on machines)

        -   `backup/`

        -   \...

## Setting parameters {#sec:setting-parameters}

<figure class="code-figure" markdown>
  <figcaption>src/gkvp_f0.48_header.f90</figcaption>

```fortran
  ...
  !--------------------------------------
  ! Dimension size (grid numbers)
  !--------------------------------------
  ! Global simulation domain
  ! in x, y,z,v,m (0:2*nxw-1, 0:2*nyw-1,-global_nz:global_nz-1,1:2*global_nv,0:global_nm)
  ! in kx,ky,z,v,m ( -nx:nx,0:global_ny,-global_nz:global_nz-1,1:2*global_nv,0:global_nm)
  integer, parameter :: nxw = 128, nyw = 64
  integer, parameter :: nx = 84, global_ny = 41 ! 2/3 de-aliasing rule
  integer, parameter :: global_nz = 24, global_nv = 48, global_nm = 15
  integer, parameter :: nzb = 3, &  ! the number of ghost grids in z
                         nvb = 3    ! the number of ghost grids in v and m
  !--------------------------------------
  ! Data distribution for MPI
  !--------------------------------------
  integer, parameter :: nprocw = 2, nprocz = 2, nprocv = 4, nprocm = 2, nprocs = 2
  ...
```

</figure>

Grid resolutions and MPI processes are set in src/gkvp_f0.48_header.f90.

-   `nxw` \| Grid number in $x$

-   `nyw` \| Grid number in $y$

-   `nx` \| Mode number in $k_x$ (-nx:nx)

-   `global_ny` \| Mode number in $k_y$ (0:global_ny)

-   `global_nz` \| Grid number in $z$ (-global_nz:global_nz-1.)

-   `global_nv` \| Grid number in $v_\parallel$ (1:2global_nv.)

-   `global_nm` \| Grid number in $\mu$ (0:global_nm.)

-   `nprocw` \| MPI processes for $k_y$ decomposition

-   `nprocz` \| MPI processes for $z$ decomposition

-   `nprocv` \| MPI processes for $v_\parallel$ decomposition

-   `nprocm` \| MPI processes for $\mu$ decomposition

-   `nprocs` \| MPI processes for $s$ decomposition

Note that (i) $\mathtt{nxw} > 3\mathtt{nx}/2$ and
$\mathtt{nyw} > 3\mathtt{global\_ny}/2$ in nonlinear simulations; (ii)
$\mathtt{global\_nz}/\mathtt{nprocz}$,
$\mathtt{global\_nv}/\mathtt{nprocv}$,
$(\mathtt{global\_nm}+1)/\mathtt{nprocm}$ should be integer; (iii)
`nprocs` is same as the number of kinetic plasma species; (iv)
$(\mathtt{global\_nm}+1)/\mathtt{nprocm} \geq 4$. `nzb` and `nvb` are
the number of ghost grid in $z$ and $v_\parallel / \mu$, whose required
numbers depend on the employed finite difference methods. `nzb`=`nvb`=3
is enough by default.
Plasma parameters are set in `run/gkvp_f0.48_namelist`. See
[Appendix X](../appendix/list-of-gkv-namelist.md#sec:list-of-gkv-namelist){ .sec-ref data-target-id="sec:list-of-gkv-namelist" data-prefix="Appendix" } in detail.
GKV has MHD equilibrium interfaces, IGS for Tokamaks and BZX for
Stellarators. See
[Appendix X](../appendix/use-of-mhd-equilibrium-interfaces.md#sec:use-of-mhd-equilibrium-interfaces){ .sec-ref data-target-id="sec:use-of-mhd-equilibrium-interfaces" data-prefix="Appendix" } for the use of IGS
and BZX.

## Building {#sec:building}

Prepare a proper `run/Makefile`. Some samples are found in
`run/backup/`. Then,

```csh
cd run
make
```

will create the load module `run/gkvp_mpifft.exe`.

## Running {#sec:running}

Prepare proper `run/sub.q` and `run/shoot`. Some samples are found in
`run/backup/`.


<figure class="code-figure" markdown>
  <figcaption>run/sub.q for Plasma Simulator at NIFS</figcaption>

```csh
#!/bin/csh
#PJM -L "rscunit=fx"
#PJM -L "rscgrp=medium"
#PJM -L "node=32"
#PJM -L "elapse=24:00:00"
#PJM -j
#PJM -s
#PJM --mpi "proc=64"
#PJM -g 17000
setenv PARALLEL 16          # Thread number for automatic parallelization
setenv OMP_NUM_THREADS 16   # Thread number for Open MP
set DIR=%%DIR%%
set LDM=gkvp_mpifft.exe
set NL=gkvp_f0.48_namelist.%%%
### Run
cd ${DIR}
setenv fu05 ${DIR}/${NL}
module load fftw-fx/3.3.4
mpiexec ${DIR}/${LDM}
```

</figure>

In the batch script `sub.q`, users specify the numbers of available
computation nodes, MPI processes, and OpenMP threads. Required MPI
process number of GKV is
$\mathtt{nproc} = \mathtt{nprocw}*\mathtt{nprocz}*\mathtt{nprocv}*\mathtt{nprocm}*\mathtt{nprocs}$.
Usually,
$\mathtt{nproc}*\mathtt{OMP\_NUM\_THREADS} = \mathtt{nodes}*(\mathtt{cores~per~node})$
is a reasonable choice.

<figure class="code-figure" id="fig:run-shoot" markdown>
  <figcaption>run/shoot</figcaption>

```csh
#!/bin/csh
#### Environment setting
set DIR=/data/lng/maeyama/gkv_training/test01
set LDM=gkvp_mpifft.exe
set NL=gkvp_f0.48_namelist
set SC=pjsub
set JS=sub.q
## For VMEC, set VMCDIR including metric_boozer.bin.dat
set VMCDIR=./input_vmec
## For IGS, set IGSDIR including METRIC_{axi,boz,ham}.OUT
set IGSDIR=./input_eqdsk
...
```

</figure>


In the Script for submitting jobs, `shoot`, users set the output
directory `DIR` where all output of GKV will be dumped. After finishing
the all settings, type as follow to submit step jobs,

```csh
cd run/
./shoot START_NUM END_NUM (JOB_ID)
```

For example, `./shoot 1 1` gives a single job (\*.001). Similarly,
`./shoot 2 2` gives a single job (\*.002), which continues from the
first run (\*.001). Step job submission allows some sets of successive
continuing jobs, e.g., `./shoot 3 5` gives step jobs (\*.003 - \*.005).
Above three examples assume that the previous job has already finished.
If a previous (\*.005) job having `JOB_ID = 11223` is still in queue,
`./shoot 6 7 11223` adds step jobs (\*.006 - \*.007) which sequentially
follow after the end of previous job (\*.005).
Before running expensive nonlinear simulations, it is strongly
recommended to test computational performance and its scalability: (i)
Run a short-time run at the target problem size, (ii) Try some
combination of
$(\mathtt{nprocw},\mathtt{nprocz},\mathtt{nprocv},\mathtt{nprocm},\mathtt{nprocs},\mathtt{OMP\_NUM\_THREADS})$
while keeping the number of $\mathtt{node}*(\mathtt{cores~per~node})$,
(iii) Check scalablity of the computational performance against the
number of computation nodes. Optimal setting may strongly depend on the
target problem size.

<figure class="code-figure" markdown>
  <figcaption>run/gkvp_f0.48_namelist</figcaption>

```fortran
&cmemo memo="GKV-plus f0.48 developed for peta-scale computing", &end
&calct calc_type="nonlinear",
       z_bound="outflow",
       z_filt="off",
       z_calc="cf4",
       art_diff=1.d0,
       num_triad_diag=0, &end
&triad mxt = 0, myt = 0/
&equib equib_type = "analytic", &end
&run_n inum=%%%, 
       ch_res = .false., &end
&files f_log="%%DIR%%/log/gkvp_f0.48.",
       f_hst="%%DIR%%/hst/gkvp_f0.48.",
       f_phi="%%DIR%%/phi/gkvp_f0.48.",
       f_fxv="%%DIR%%/fxv/gkvp_f0.48.",
       f_cnt="%%DIR%%/cnt/gkvp_f0.48.", &end
&runlm e_limit = 84600.d0, &end
&times tend = 200.d0,
       dtout_fxv = 1.d0,
       dtout_ptn = 0.1d0,
       dtout_eng = 0.01d0,
       dtout_dtc = 0.001d0, &end
&deltt dt_max = 0.001d0,
       adapt_dt = .true.,
       courant_num = 0.5d0,
       time_advnc = "auto_init", &end
&physp R0_Ln = 2.2d0, 2.2d0,
       R0_Lt = 6.9d0, 6.9d0,
       nu = 1.d0, 1.d0,
       Anum = 5.446d-4, 1.d0,
       Znum = 1.d0, 1.d0,
       fcs = 1.d0, 1.d0,
       sgn = -1.d0, 1.d0,
       tau = 1.d0, 1.d0,
       dns1 = 1.d-9, 1.d-9,
       tau_ad = 1.d0,
       lambda_i = 4.3d-4,
       beta = 0.4d-2,
       ibprime = 0,
       vmax = 4.d0,
       nx0 = 10000, &end
&nperi n_tht = 1,
       kymin = 0.05d0,
       m_j   = 4,
       del_c = 0.d0, &end
&confp eps_r    = 0.18d0,
       eps_rnew = 1.d0,
       q_0      = 1.4d0,
       s_hat    = 0.78d0,
...
&nu_ref Nref = 4.5d19,
        Lref = 1.7d0,
        Tref = 2.0d0,
        col_type = LB,
        iFLR = 1, icheck = 0, &end
```

</figure>
