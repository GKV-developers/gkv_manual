# Diagnostics {#chap:diagnostics}

## Output files of GKV {#sec:output-files-of-gkv}

When finishing a run of GKV, all simulation output will be dumped in the
output directory `DIR` set in the `run/shoot` script (for example in
Figure [5.3](../simulation/simulation.md#fig:run-shoot),
`DIR=/data/lng/maeyama/gkv_training/test01/`), as classified into the
following directories,

-   `DIR/`

    -   `log/` (Log files on simulation runs)

    -   `cnt/` (Binary data for restart)

    -   `fxv/` (Binary data of distribution functions
        $\tilde{f}_{\mathrm{s}\bm{k}}(k_x,k_y,v_\parallel,\mu)$ at
        several positions of $z$)

    -   `phi/` (Binary data of potentials, fluid moments, and variables
        in the entropy balance equation)

    -   `hst/` (Ascii data of the GKV standard output)

    -   \... (Others are back up of the source code and environmental
        settings)

List of GKV output is summarized in
[Appendix X](../appendix/list-of-gkv-namelist.md#sec:list-of-gkv-namelist){ .sec-ref data-target-id="sec:list-of-gkv-namelist" data-prefix="Appendix" }.

Users may diagnose these output data by themselves. The present version
of GKV provides two post-processing tools, `fig_stdout` and `diag`,
which are contained in `gkvp_f0.48/extra_tools/`.

## PDF generating script for ASCII output: fig_stdout {#sec:pdf-generating-script-for-ascii-output-fig_stdout}

Noting that `fig_stdout` requires `gnuplot` later than version 5.0.
Expanding `gkvp_f0.48/extra_tools/fig_stdout.tar.gz` under the output
directory `DIR`,

-   `DIR/`

    -   `fig_stdout/`

        -   `make_pdf.csh` (Script for making a PDF sheet)

        -   `src/` (Script for gnuplot)

        -   `pdf/` (Directory to be store the created PDF sheet)

        -   `eps/` (Directory to be store the plotted EPS files)

        -   `data/` (Directory to be store raw data of GKV standard
            output)

and typing the following commands,

```csh
cd fig_stdout/
./make_pdf.csh clean
./make_pdf.csh
```

users obtain a PDF sheet of the GKV standard output in
`fig_stdout/pdf/`.

## Post-processing program for BINARY output: diag {#sec:post-processing-program-for-binary-output-diag}

### What is diag?

One difficulty of users may read GKV binary output which are decomposed
by MPI. Post-processing program `diag` helps to read GKV binary output
of a desired quantity at a desired time step. Since the read quantity is
constructed as a global variable, e.g.,
$\tilde{\phi}_{\bm{k}}(\texttt{-nx:nx,0:global_ny,-global_nz:global_nz-1})$
(not a local variable decomposed by MPI
$\tilde{\phi}_{\bm{k}}(\texttt{-nx:nx,0:ny,-nz:nz-1})$), users do not
need to be conscious of MPI parallelization of GKV. The main program
`diag_main.f90` calls each diagnostics module `out_*****.f90`, which
should be encapsulated so as to avoid interference and misuse. Reading
GKV binary file is done by calling `diag_rb` module in each diagnostics
module. Although there are some diagnostics modules implemented, users
can design a new diagnostics module by themselves.

### How to use diag

Expanding `gkvp_f0.48/extra_tools/v29diag.tar.gz`, one finds source
codes of `diag`.

-   `v29diag/`

    -   `Makefile`

    -   `go.diag` (Batch script)

    -   `backup/`

    -   `plotfile/` (Sample file for gnuplot)

    -   `src`

        -   `diag_header.f90` (Module for setting grid resolutions and
            MPI processes in GKV)

        -   `diag_main.f90` (Main program calling each diagnostics
            module)

        -   `diag_rb.f90` (Module for reading GKV binary output)

        -   `diag_*****.f90` (Module for other settings)

        -   \...

        -   `out_*****.f90` (Module for each diagnostics)

        -   \...

How to use `diag` is in the following steps:

1\. Setting parameters in `v29diag/src/diag_header.f90`

<figure class="code-figure" markdown>
  <figcaption>v29diag/src/diag_header.f90</figcaption>
```fortran
  ...
!%%% DIAG parameters %%%
  integer, parameter :: snum = 1      ! begining of simulation runs
  integer, parameter :: enum = 1      ! end of simulation runs
!%%%%%%%%%%%%%%%%        ! Set run numbers covering diagnosed time range.

!%%% GKV parameters %%%
  integer, parameter :: nxw = 2, nyw = 8
  integer, parameter :: nx = 0, global_ny = 5 ! 2/3 de-aliasing rule
  integer, parameter :: global_nz = 64, global_nv = 24, global_nm = 15
  integer, parameter :: nzb = 3, &  ! the number of ghost grids in z
                         nvb = 3    ! the number of ghost grids in v and m
  integer, parameter :: nprocw = 1, nprocz = 4, nprocv = 2, nprocm = 2, nprocs = 2
!%%%%%%%%%%%%%%%%%%%%%%%%        ! These should be same as gkvp_f0.48_header.f90.
  ...
```
</figure>

2\. Calling diagnostics modules in `v29diag/src/diag_main.f90`

3\. Setting the output directory of GKV, `DIR`, in `go.diag`

4\. Compile & Execution

5\. Output data is dumped in `$DIR/post/`.

### Examples of diag

<figure class="code-figure" markdown>
  <figcaption>Example from v29diag/src/diag_main.f90: outputs 2D electrostatic potential in the x–y plane at a given z, phi_tilde(x, y).</figcaption>

```fortran
PROGRAM diag
  ...
  use out_mominxy, only : phiinxy    ! Use corresponding diagnostics module
  implicit none
  integer :: giz, loop
  ...
  giz  = 0       ! Set diagnosed grid in z (-global_nz <= giz <= global_nz-1)
  loop = 100     ! Set diagnosed time step (time = dtout_ptn * loop)
  call phiinxy(giz, loop)  ! Output phi_tilde(x,y) at giz=0, loop=100
  ...
END PROGRAM diag
```

</figure>


<figure class="code-figure" markdown>
  <figcaption>Example from v29diag/src/diag_main.f90: outputs 1D electrostatic potential in the field-aligned z coordinate for a given mode (k_x, k_y), i.e., phi_tilde_k(z).</figcaption>

```fortran
PROGRAM diag
  ...
  use out_mominz, only : phiinz    ! Use corresponding diagnostics module
  implicit none
  integer :: mx, gmy, loop
  ...
  mx   = 0       ! Set diagnosed radial mode number k_x (-nx <= mx <= nx-1)
  gmy  = 6       ! Set diagnosed bi-normal mode number k_y (0 <= gmy <= global_ny)
  loop = 100     ! Set diagnosed time step (time = dtout_ptn * loop)
  call phiinz(mx, gmy, loop)  ! Output phi_tilde_k(z) at mx=0, gmy=6, loop=100
  ...
END PROGRAM diag
```

</figure>

For more details,
[Appendix X](../appendix/data-reading-module-diag_rb-in-the-post-processing-program-diag.md#sec:data-reading-module-diag_rb-in-the-post-processing-program-diag){ .sec-ref data-target-id="sec:data-reading-module-diag_rb-in-the-post-processing-program-diag" data-prefix="Appendix" } 
explains how `diag_rb` module read GKV binary data, and
[Appendix X](../appendix/diagnostics-modules-in-the-post-processing-program-diag.md#sec:diagnostics-modules-in-the-post-processing-program-diag){ .sec-ref data-target-id="sec:diagnostics-modules-in-the-post-processing-program-diag" data-prefix="Appendix" } 
shows some examples of diagnostics modules.
