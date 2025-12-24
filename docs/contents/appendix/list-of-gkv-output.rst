.. _sec_list-of-gkv-output:

List of GKV output
====================

GKV output files are:

-   The output directory ``DIR/``

    -   ``cnt/*cnt*``

    -   ``fxv/*fxv*``

    -   ``phi/\*phi\*, \*Al\*, \*mom\*, \*trn\*, (\*tri\* for nonlinear runs)``

    -   ``hst/\*bln\*, \*geq\*, \*gem\*, \*qes\*, \*qem\*, \*wes\*, \*wem\*, \*eng\*, \*men\*, \*dtc\*, \*mtr\*, (\*frq\*, \*dsp\* for linear runs)``

    -   ``log/*log*``

Their explanations are summarized below.

**Explanations on GKV output files**

.. list-table:: cnt/gkvp.cnt.(inum in 3 digits).zarr/
   :widths: 6 40
   :header-rows: 1

   * -  Field
     - Description
   * - File type
     - ``Zarr format binary``
   * - Output timing
     - ``End of the run``
   * - MPI ranks
     - ``All``
   * - Total files
     - ``nprocw*nprocz*nprocv*nprocm*nprocs*(Total run numbers)``
   * - GKV unit
     - ``ocnt``
   * - Stored data
     - Coordinates:

       + **t** Simulation time
       + **is** particle species (integer)
       + **mu** magnetic moment (or **vp** perpendicular velocity)
       + **vl** parallel velocity
       + **zz** field-aligned coordinate
       + **ky** Field-line-label (poloidal) wavwenumber
       + **kx** radial wavenumber

       Data variables: **cnt[t,is,mu,vl,zz,ky,kx]** Perturbed distribution function :math:`\tilde{f}_{\mathrm{s}\mathbf{k}}` (double complex).

.. list-table:: fxv/gkvp.fxv.(inum in 3 digits).zarr/
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Zarr format binary``
   * - Output timing
     - ``dtout_fxv``
   * - MPI ranks
     - ``All``
   * - Total files
     - ``nprocw*nprocz*nprocv*nprocm*nprocs*(Total run numbers)``
   * - GKV unit
     - ``ofxv``
   * - Stored data
     - Coordinates:

       + **t** Simulation time,
       + **is** particle species (integer)
       + **mu** magnetic moment (or **vp** perpendicular velocity)
       + **vl** parallel velocity, **zz** field-aligned coordinate
       + **ky** Field-line-label (poloidal) wavwenumber
       + **kx** radial wavenumber

       Data variables: **fxv[t,is,mu,vl,zz,ky,kx]** Perturbed distribution function :math:`\tilde{f}_{\mathrm{s}\mathbf{k}}` (double complex) at ``iz = -nz`` in each ``rankz``.

.. list-table:: phi/gkvp.phi.(inum in 3 digits).zarr/
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Zarr format binary``
   * - Output timing
     - ``dtout_ptn``
   * - MPI ranks
     - ``ranks == 0 .and. vel_rank == 0``
   * - Total files
     - ``nprocw*nprocz*(Total run numbers)``
   * - GKV unit
     - ``ophi``
   * - Stored data
     - Coordinates:

       + **t** Simulation time
       + **zz** field-aligned coordinate
       + **ky** Field-line-label (poloidal) wavwenumber
       + **kx** radial wavenumber

       Data variables: **phi[t,zz,ky,kx]** Perturbed electrostatic potential :math:`\tilde{\phi}_{\mathbf{k}}`.

.. list-table:: phi/gkvp.Al.(inum in 3 digits).zarr/
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Zarr format binary``
   * - Output timing
     - ``dtout_ptn``
   * - MPI ranks
     - ``ranks == 0 .and. vel_rank == 0``
   * - Total files
     - ``nprocw*nprocz*(Total run numbers)``
   * - GKV unit
     - ``oAl``
   * - Stored data
     - Coordinates:

       + **t** Simulation time
       + **zz** field-aligned coordinate
       + **ky** Field-line-label (poloidal) wavwenumber
       + **kx** radial wavenumber

       Data variables: **Al[t,zz,ky,kx]** Perturbed vector potential :math:`\tilde{A}_{\parallel\mathbf{k}}`.

.. list-table:: phi/gkvp.mom.(inum in 3 digits).zarr/
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Zarr format binary``
   * - Output timing
     - ``dtout_ptn``
   * - MPI ranks
     - ``vel_rank == 0``
   * - Total files
     - ``nprocw*nprocz*nprocs*(Total run numbers)``
   * - GKV unit
     - ``omom``
   * - Stored data
     - Coordinates:

       + **t** Simulation time
       + **is** particle species (integer)
       + **imom** index of fluid moments (integer)
       + **zz** field-aligned coordinate
       + **ky** Field-line-label (poloidal) wavwenumber
       + **kx** radial wavenumber

       Data variables: **mom[t,is,imom,zz,ky,kx]** Perturbed fluid moment (double complex).
       In the present version ``nmom = 6``:

       + :math:`\tilde{n}_{\mathrm{s}\mathbf{k}} = \int dv^3\, J_{0\mathrm{s}\mathbf{k}}\, \tilde{f}_{\mathrm{s}\mathbf{k}}`
       + :math:`\tilde{u}_{\parallel\mathrm{s}\mathbf{k}} = \int dv^3\, v_\parallel\, J_{0\mathrm{s}\mathbf{k}}\, \tilde{f}_{\mathrm{s}\mathbf{k}}`
       + :math:`\tilde{p}_{\parallel\mathrm{s}\mathbf{k}} = \int dv^3\, \frac{m_\mathrm{s} v_\parallel^2}{2}\, J_{0\mathrm{s}\mathbf{k}}\, \tilde{f}_{\mathrm{s}\mathbf{k}}`
       + :math:`\tilde{p}_{\perp\mathrm{s}\mathbf{k}} = \int dv^3\, \mu B\, J_{0\mathrm{s}\mathbf{k}}\, \tilde{f}_{\mathrm{s}\mathbf{k}}`
       + :math:`\tilde{q}_{\parallel\parallel\mathrm{s}\mathbf{k}} = \int dv^3\, v_\parallel \frac{m_\mathrm{s} v_\parallel^2}{2}\, J_{0\mathrm{s}\mathbf{k}}\, \tilde{f}_{\mathrm{s}\mathbf{k}}`
       + :math:`\tilde{q}_{\parallel\perp\mathrm{s}\mathbf{k}} = \int dv^3\, v_\parallel \mu B\, J_{0\mathrm{s}\mathbf{k}}\, \tilde{f}_{\mathrm{s}\mathbf{k}}`
       + Normalized by :math:`\delta_\mathrm{ref}n_\mathrm{ref}`, :math:`\delta_\mathrm{ref}n_\mathrm{ref}v_\mathrm{ref}`, :math:`\delta_\mathrm{ref}n_\mathrm{ref}T_\mathrm{ref}`, :math:`\delta_\mathrm{ref}n_\mathrm{ref}T_\mathrm{ref}`, :math:`\delta_\mathrm{ref}n_\mathrm{ref}T_\mathrm{ref}v_\mathrm{ref}`, :math:`\delta_\mathrm{ref}n_\mathrm{ref}T_\mathrm{ref}v_\mathrm{ref}`, respectively.

.. list-table:: phi/gkvp.trn.(inum in 3 digits).zarr/
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Zarr format binary``
   * - Output timing
     - ``dtout_eng``
   * - MPI ranks
     - ``zsp_rank == 0 .and. vel_rank == 0``
   * - Total files
     - ``nprocw*nprocs*(Total run numbers)``
   * - GKV unit
     - ``otrn``
   * - Stored data
     - Coordinates:

       + **t** Simulation time
       + **is** particle species (integer)
       + **itrn** index of entropy balance diagnostics (integer)
       + **ky** Field-line-label (poloidal) wavwenumber
       + **kx** radial wavenumber

       Data variables: **trn[t,is,itrn,ky,kx]**

       + :math:`S_{\mathrm{s}\mathbf{k}}(-nx:nx,0:ny)`: Perturbed gyrocenter entropy :math:`[\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref}]` (real*8)
       + :math:`W_{\mathrm{E}\mathbf{k}}(-nx:nx,0:ny)`: Electrostatic field energy including polarization :math:`[\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref}]` (real*8)
       + :math:`W_{\mathrm{M}\mathbf{k}}(-nx:nx,0:ny)`: Magnetic field energy :math:`[\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref}]` (real*8)
       + :math:`R_{\mathrm{sE}\mathbf{k}}(-nx:nx,0:ny)`: Wave–particle interaction :math:`( W_{\mathrm{E}\mathbf{k}} \rightarrow S_{\mathrm{s}\mathbf{k}} )` :math:`[\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}]` (real*8)
       + :math:`R_{\mathrm{sM}\mathbf{k}}(-nx:nx,0:ny)`: Wave–particle interaction :math:`( W_{\mathrm{M}\mathbf{k}} \rightarrow S_{\mathrm{s}\mathbf{k}} )` :math:`[\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}]` (real*8)
       + :math:`I_{\mathrm{sE}\mathbf{k}}(-nx:nx,0:ny)`: Nonlinear entropy transfer by :math:`\mathbf{E}\times\mathbf{B}` flow :math:`[\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}]` (real*8)
       + :math:`I_{\mathrm{sM}\mathbf{k}}(-nx:nx,0:ny)`: Nonlinear entropy transfer by magnetic flutter :math:`[\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}]` (real*8)
       + :math:`D_{\mathrm{s}\mathbf{k}}(-nx:nx,0:ny)`: Collisional dissipation :math:`[\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}]` (real*8)
       + :math:`\Gamma_{\mathrm{sE}\mathbf{k}}(-nx:nx,0:ny)`: Particle flux by :math:`\mathbf{E}\times\mathbf{B}` flow :math:`[\delta_\mathrm{ref}^2 n_\mathrm{ref} v_\mathrm{ref}]` (real*8)
       + :math:`\Gamma_{\mathrm{sM}\mathbf{k}}(-nx:nx,0:ny)`: Particle flux by magnetic flutter :math:`[\delta_\mathrm{ref}^2 n_\mathrm{ref} v_\mathrm{ref}]` (real*8)
       + :math:`Q_{\mathrm{sE}\mathbf{k}}(-nx:nx,0:ny)`: Energy flux by :math:`\mathbf{E}\times\mathbf{B}` flow :math:`[\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}]` (real*8)
       + :math:`Q_{\mathrm{sM}\mathbf{k}}(-nx:nx,0:ny)`: Energy flux by magnetic flutter :math:`[\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}]` (real*8)

       *See also Supplemental* :ref:`sec_entropy-balance-equation-for-each-wavenumber-and-plasma-species`.

.. list-table:: phi/gkvp.tri.mx(mxt in 4 digits)my(myt in 4 digits).(inum in 3 digits).zarr/
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Zarr format binary``
   * - Output timing
     - ``dtout_ptn`` (when ``calc_type == "nonlinear"`` and ``num_triad_diag > 0``)
   * - MPI ranks
     - ``rank == 0``
   * - Total files
     - ``nprocs*num_triad_diag*(Total run numbers)``
   * - GKV unit
     -  ``otri``
   * - Stored data
     - Coordinates:

       + **t** Simulation time
       + **is** particle species (integer)
       + **itri** index of triad transfer diagnostics (integer)
       + **ky** Field-line-label (poloidal) wavwenumber
       + **kx** radial wavenumber

       Data variables: **tri[t,is,itri,ky,kx]**

       + :math:`J_{\mathrm{sE}\mathbf{k}}^{\mathbf{p,q}}(-nx:nx,-global_{y}:global_{y})`: Triad transfer function from modes :math:`\mathbf{p}, \mathbf{q}` to mode :math:`\mathbf{k}` via :math:`\mathbf{E}\times\mathbf{B}` nonlinearity :math:`[\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}]` (real*8)

       + :math:`J_{\mathrm{sE}\mathbf{p}}^{\mathbf{q,k}}(-nx:nx,-global_{y}:global_{y})`: Cyclic change :math:`(\mathbf{k,p,q}) \rightarrow (\mathbf{p,q,k})` (real*8)
       + :math:`J_{\mathrm{sE}\mathbf{q}}^{\mathbf{k,p}}(-nx:nx,-global_{y}:global_{y})`: Cyclic change :math:`(\mathbf{p,q,k}) \rightarrow (\mathbf{q,k,p})` (real*8)
       + :math:`J_{\mathrm{sM}\mathbf{k}}^{\mathbf{p,q}}(-nx:nx,-global_{y}:global_{y})`:
         Triad transfer function from modes :math:`\mathbf{p}, \mathbf{q}` to mode :math:`\mathbf{k}` via
         magnetic-flutter nonlinearity :math:`[\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}]` (real*8)
       + :math:`J_{\mathrm{sM}\mathbf{p}}^{\mathbf{q,k}}(-nx:nx,-global_{y}:global_{y})`: Cyclic change :math:`(\mathbf{k,p,q}) \rightarrow (\mathbf{p,q,k})` (real*8)
       + :math:`J_{\mathrm{sM}\mathbf{q}}^{\mathbf{k,p}}(-nx:nx,-global_{y}:global_{y})`: Cyclic change :math:`(\mathbf{p,q,k}) \rightarrow (\mathbf{q,k,p})` (real*8)

       Diagnosed for a fixed mode :math:`\mathbf{k} = (\texttt{mxt,myt})` and plotted as a 2D function of :math:`\mathbf{p} = (p_x,p_y)`,
       where the triad condition determines :math:`\mathbf{q} = -\mathbf{k}-\mathbf{p}`.
       *See also Supplemental* :ref:`sec_triad-transfer-function`.

.. list-table:: hst/gkvp_f0.48.bln.(ranks in 1 digits).(inum in 3 digits)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Ascii``
   * - Output timing
     - ``dtout_eng``
   * - MPI ranks
     - ``rank == 0``
   * - Total files
     - ``nprocs*(Total run numbers)``
   * - GKV unit
     - ``obln``
   * - Stored data
     - time, :math:`S_{\mathrm{s}}`, :math:`W_{\mathrm{E}}`, :math:`W_{\mathrm{M}}`, :math:`R_{\mathrm{sE}}`, :math:`R_{\mathrm{sM}}`, :math:`I_{\mathrm{sE}}`, :math:`I_{\mathrm{sM}}`, :math:`D_{\mathrm{s}}`, :math:`\frac{T_\mathrm{s}\Gamma_{\mathrm{sE}}}{L_{p\mathrm{s}}}`, :math:`\frac{T_\mathrm{s}\Gamma_{\mathrm{sM}}}{L_{p\mathrm{s}}}`, :math:`\frac{\Theta_{\mathrm{sE}}}{L_{T\mathrm{s}}}`, :math:`\frac{\Theta_{\mathrm{sM}}}{L_{T\mathrm{s}}}`

       where,

       - **time**: Simulation time :math:`t` [:math:`L_\mathrm{ref}/v_\mathrm{ref}`] (real*8)

       - :math:`S_{\mathrm{s}}` (0:1): Perturbed gyrocenter entropy [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}`] (real*8).

       - :math:`W_{\mathrm{E}}` (0:1): Electrostatic field energy including polarization [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}`] (real*8).

       - :math:`W_{\mathrm{M}}` (0:1): Magnetic field energy [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}`] (real*8).

       - :math:`R_{\mathrm{sE}}` (0:1): Wave-particle interaction (:math:`W_{\mathrm{E}\bm{k}} \rightarrow S_{\mathrm{s}\bm{k}}`) [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}v_\mathrm{ref}/L_\mathrm{ref}`] (real*8).

       - :math:`R_{\mathrm{sM}}` (0:1): Wave-particle interaction (:math:`W_{\mathrm{M}\bm{k}} \rightarrow S_{\mathrm{s}\bm{k}}`) [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}v_\mathrm{ref}/L_\mathrm{ref}`] (real*8).

       - :math:`I_{\mathrm{sE}}` (0:1): Nonlinear entropy transfer by :math:`\bm{E}\times\bm{B}` flow [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}v_\mathrm{ref}/L_\mathrm{ref}`] (real*8).

       - :math:`I_{\mathrm{sM}}` (0:1): Nonlinear entropy transfer by magnetic flutter [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}v_\mathrm{ref}/L_\mathrm{ref}`] (real*8).

       - :math:`D_{\mathrm{s}}` (0:1): Collisional dissipation [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}v_\mathrm{ref}/L_\mathrm{ref}`] (real*8).

       - :math:`\frac{T_\mathrm{s}\Gamma_{\mathrm{sE}}}{L_{p\mathrm{s}}}`: Particle flux term by :math:`\bm{E}\times\bm{B}` flow [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}v_\mathrm{ref}/L_\mathrm{ref}`] (real*8).

       - :math:`\frac{T_\mathrm{s}\Gamma_{\mathrm{sM}}}{L_{p\mathrm{s}}}`: Particle flux term by magnetic flutter [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}v_\mathrm{ref}/L_\mathrm{ref}`] (real*8).

       - :math:`\frac{\Theta_{\mathrm{sE}}}{L_{T\mathrm{s}}}`: Heat flux term by :math:`\bm{E}\times\bm{B}` flow [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}v_\mathrm{ref}/L_\mathrm{ref}`] (real*8).

       - :math:`\frac{\Theta_{\mathrm{sM}}}{L_{T\mathrm{s}}}`: Heat flux term by magnetic flutter [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}v_\mathrm{ref}/L_\mathrm{ref}`] (real*8).

       The 0th and 1st components of :math:`S_\mathrm{s}` -- :math:`D_\mathrm{s}` correspond to non-zonal (:math:`k_y \neq 0`) and zonal (:math:`k_y = 0`) fluctuations, respectively.

.. list-table:: hst/gkvp_f0.48.ges.(ranks in 1 digits).(inum in 3 digits)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Ascii``
   * - Output timing
     - ``dtout_eng``
   * - MPI ranks
     - ``rank == 0``
   * - Total files
     - ``nprocs*(Total run numbers)``
   * - GKV unit
     - ``oges``
   * - Stored data
     - time, :math:`\Gamma_{\mathrm{sE}}`, :math:`\Gamma_{\mathrm{sE}k_y}`

       where,

       - **time**: Simulation time :math:`t` [:math:`L_\mathrm{ref}/v_\mathrm{ref}`] (real)

       - :math:`\Gamma_{\mathrm{sE}}`: Total particle flux by :math:`\bm{E} \times \bm{B}` flow [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}v_\mathrm{ref}`] (real).

       - :math:`\Gamma_{\mathrm{sE}k_y}` (0:global_ny): :math:`k_y` spectrum of the particle flux by :math:`\bm{E} \times \bm{B}` flow [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}v_\mathrm{ref}`] (real).

.. list-table:: hst/gkvp.gem.(ranks in 1 digits).(inum in 3 digits)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Ascii``
   * - Output timing
     - ``dtout_eng``
   * - MPI ranks
     - ``rank == 0``
   * - Total files
     - ``nprocs*(Total run numbers)``
   * - GKV unit
     - ``ogem``
   * - Stored data
     - time, :math:`\Gamma_{\mathrm{sM}}`, :math:`\Gamma_{\mathrm{sM}k_y}`

       where,

       - **time**: Simulation time :math:`t` [:math:`L_\mathrm{ref}/v_\mathrm{ref}`] (real)

       - :math:`\Gamma_{\mathrm{sM}}`: Total particle flux by magnetic flutter [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}v_\mathrm{ref}`] (real).

       - :math:`\Gamma_{\mathrm{sM}k_y}` (0:global_ny): :math:`k_y` spectrum of the particle flux by magnetic flutter [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}v_\mathrm{ref}`] (real).

.. list-table:: hst/gkvp.qes.(ranks in 1 digits).(inum in 3 digits)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Ascii``
   * - Output timing
     - ``dtout_eng``
   * - MPI ranks
     - ``rank == 0``
   * - Total files
     - ``nprocs*(Total run numbers)``
   * - GKV unit
     - ``oqes``
   * - Stored data
     - time, :math:`Q_{\mathrm{sE}}`, :math:`Q_{\mathrm{sE}k_y}`

       where,

       - **time**: Simulation time :math:`t` [:math:`L_\mathrm{ref}/v_\mathrm{ref}`] (real)

       - :math:`Q_{\mathrm{sE}}`: Total energy flux by :math:`\bm{E} \times \bm{B}` flow [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}v_\mathrm{ref}`] (real).

       - :math:`Q_{\mathrm{sE}k_y}` (0:global_ny): :math:`k_y` spectrum of the energy flux by :math:`\bm{E} \times \bm{B}` flow [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}v_\mathrm{ref}`] (real).

.. list-table:: hst/gkvp.qem.(ranks in 1 digits).(inum in 3 digits)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Ascii``
   * - Output timing
     - ``dtout_eng``
   * - MPI ranks
     - ``rank == 0``
   * - Total files
     - ``nprocs*(Total run numbers)``
   * - GKV unit
     - ``oqem``
   * - Stored data
     - time, :math:`Q_{\mathrm{sM}}`, :math:`Q_{\mathrm{sM}k_y}`

       where,

       - **time**: Simulation time :math:`t` [:math:`L_\mathrm{ref}/v_\mathrm{ref}`] (real)

       - :math:`Q_{\mathrm{sM}}`: Total energy flux by magnetic flutter [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}v_\mathrm{ref}`] (real).

       - :math:`Q_{\mathrm{sM}k_y}` (0:global_ny): :math:`k_y` spectrum of the energy flux by magnetic flutter [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}v_\mathrm{ref}`] (real).

.. list-table:: hst/gkvp.wes.(inum in 3 digits)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Ascii``
   * - Output timing
     - ``dtout_eng``
   * - MPI ranks
     - ``rankg == 0``
   * - Total files
     - ``(Total run numbers)``
   * - GKV unit
     - ``owes``
   * - Stored data
     - time, :math:`W_{\mathrm{E}}`, :math:`W_{\mathrm{E}k_y}`

       where,

       - **time**: Simulation time :math:`t` [:math:`L_\mathrm{ref}/v_\mathrm{ref}`] (real)

       - :math:`W_{\mathrm{E}}`: Total electrostatic field energy including polarization [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}`] (real).

       - :math:`W_{\mathrm{E}k_y}` (0:global_ny): :math:`k_y` spectrum of the electrostatic field energy [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}`] (real).

.. list-table:: hst/gkvp.wem.(inum in 3 digits)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Ascii``
   * - Output timing
     - ``dtout_eng``
   * - MPI ranks
     - ``rankg == 0``
   * - Total files
     - ``(Total run numbers)``
   * - GKV unit
     - ``owem``
   * - Stored data
     - time, :math:`W_{\mathrm{M}}`, :math:`W_{\mathrm{M}k_y}`

       where,

       - **time**: Simulation time :math:`t` [:math:`L_\mathrm{ref}/v_\mathrm{ref}`] (real)

       - :math:`W_{\mathrm{M}}`: Total magnetic field energy [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}`] (real).

       - :math:`W_{\mathrm{M}k_y}` (0:global_ny): :math:`k_y` spectrum of the magnetic field energy [:math:`\delta_\mathrm{ref}^2n_\mathrm{ref}T_\mathrm{ref}`] (real).

.. list-table:: hst/gkvp.eng.(inum in 3 digits)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Ascii``
   * - Output timing
     - ``dtout_eng``
   * - MPI ranks
     - ``rankg == 0``
   * - Total files
     - ``(Total run numbers)``
   * - GKV unit
     - ``oeng``
   * - Stored data
     - time, :math:`\sum_{k_x,k_y} \langle |\tilde{\phi}_{\bm{k}}|^2 \rangle`, :math:`\sum_{k_x} \langle |\tilde{\phi}_{\bm{k}}|^2 \rangle`

       where,

       - **time**: Simulation time :math:`t` [:math:`L_\mathrm{ref}/v_\mathrm{ref}`] (real)

       - :math:`\sum_{k_x,k_y} \langle |\tilde{\phi}_{\bm{k}}|^2 \rangle`: Squared amplitude of the perturbed electrostatic potential [:math:`(\delta_\mathrm{ref}T_\mathrm{ref}/e_\mathrm{ref})^2`] (real).

       - :math:`\sum_{k_x} \langle |\tilde{\phi}_{\bm{k}}|^2 \rangle` (0:global_ny): :math:`k_y` spectrum of the squared amplitude of the perturbed electrostatic potential [:math:`(\delta_\mathrm{ref}T_\mathrm{ref}/e_\mathrm{ref})^2`] (real).

.. list-table:: hst/gkvp.men.(inum in 3 digits)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Ascii``
   * - Output timing
     - ``dtout_eng``
   * - MPI ranks
     - ``rankg == 0``
   * - Total files
     - ``(Total run numbers)``
   * - GKV unit
     - ``omen``
   * - Stored data
     - time, :math:`\sum_{k_x,k_y} \langle |\tilde{A}_{\parallel\bm{k}}|^2 \rangle`, :math:`\sum_{k_x} \langle |\tilde{A}_{\parallel\bm{k}}|^2 \rangle`

       where,

       - **time**: Simulation time :math:`t` [:math:`L_\mathrm{ref}/v_\mathrm{ref}`] (real)

       - :math:`\sum_{k_x,k_y} \langle |\tilde{A}_{\parallel\bm{k}}|^2 \rangle`: Squared amplitude of the perturbed electrostatic potential [:math:`(\delta_\mathrm{ref}\rho_\mathrm{ref}B_\mathrm{ref})^2`] (real).

       - :math:`\sum_{k_x} \langle |\tilde{A}_{\parallel\bm{k}}|^2 \rangle` (0:global\_ny): :math:`k_y` spectrum of the squared amplitude of the perturbed electrostatic potential [:math:`(\delta_\mathrm{ref}\rho_\mathrm{ref}B_\mathrm{ref})^2`] (real).

.. list-table:: hst/gkvp.dtc.(inum in 3 digits)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - `Ascii`
   * - Output timing
     - `dtout_dtc`
   * - MPI ranks
     - `rankg == 0`
   * - Total files
     - `(Total run numbers)`
   * - GKV unit
     - `odtc`
   * - Stored data
     - time, dt, dt_limit, dt_nl

       where,

       - **time**: Simulation time :math:`t` [:math:`L_\mathrm{ref}/v_\mathrm{ref}`] (real)

       - **dt**: Time step size [:math:`L_\mathrm{ref}/v_\mathrm{ref}`] (real)

       - **dt_limit**: Estimation of time step size limit [:math:`L_\mathrm{ref}/v_\mathrm{ref}`] (real)

       - **dt_nl**: Estimation of time step size limit from nonlinear advection [:math:`L_\mathrm{ref}/v_\mathrm{ref}`] (real)

.. list-table:: hst/gkvp.mtr.(inum in 3 digits)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Ascii``
   * - Output timing
     - ``Beginning of the run``
   * - MPI ranks
     - ``rankg == 0``
   * - Total files
     - ``(Total run numbers)``
   * - GKV unit
     - ``omtr``
   * - Stored data
     - time, :math:`\theta` (or :math:`\varphi`), :math:`B, \frac{\partial B}{\partial x}, \frac{\partial B}{\partial y}, \frac{\partial B}{\partial z}, g^{xx}, g^{xy}, g^{xz}, g^{yy}, g^{yz}, g^{zz}, \sqrt{g}`

       where,

       - **time**: Simulation time :math:`t` [:math:`L_\mathrm{ref}/v_\mathrm{ref}`] (real)

       - :math:`\theta`: Poloidal angle (or Toroidal angle :math:`\varphi` when equib\_type = "vmec") (real)

       - :math:`B`: Magnetic field strength [:math:`B_\mathrm{ref}`] (real)

       - :math:`\frac{\partial B}{\partial x}, \frac{\partial B}{\partial y}, \frac{\partial B}{\partial z}`: Derivative of :math:`B` [:math:`B_\mathrm{ref}/L_\mathrm{ref}`] (real)

       - :math:`g^{xx}, g^{xy}, g^{xz} [L_\mathrm{ref}^{-1}], g^{yy}, g^{yz} [L_\mathrm{ref}^{-1}], g^{zz} [L_\mathrm{ref}^{-2}]`: Metric tensor (real)

       - :math:`\sqrt{g}`: Jacobian [:math:`L_\mathrm{ref}`] (real)

.. list-table:: hst/gkvp.frq.(inum in 3 digits)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Ascii``
   * - Output timing
     - ``dtout_eng`` (when ``calc_type == "linear"`` or ``"lin_freq"``)
   * - MPI ranks
     - ``rankg == 0``
   * - Total files
     - ``(Total run numbers)``
   * - GKV unit
     - ``ofrq``
   * - Stored data
     - time, omega

       where,

       - **time**: Simulation time :math:`t` [:math:`L_\mathrm{ref}/v_\mathrm{ref}`] (real)

       - **omega(1:global_ny)**: :math:`k_y` spectrum of complex linear frequency :math:`\omega` = (real frequency, growthrate) [:math:`v_\mathrm{ref}/L_\mathrm{ref}`] (real, real)

       Complex frequency for :math:`k_x = 0` at each time is evaluated as :math:`\omega = \omega_\mathrm{r} + i \gamma = \frac{\ln \tilde{\phi}_{\bm{k}}(t+\Delta t) - \ln \tilde{\phi}_{\bm{k}}(t)}{-i \Delta t}` by assuming :math:`\tilde{\phi}_{\bm{k}}(t) \propto e^{-i\omega t}`.

.. list-table:: hst/gkvp.dsp.(inum in 3 digits)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Ascii``
   * - Output timing
     - ``End of the run`` (when ``calc_type == "linear"`` or ``"lin_freq"``)
   * - MPI ranks
     - ``rankg == 0``
   * - Total files
     - ``(Total run numbers)``
   * - GKV unit
     - ``odsp``
   * - Stored data
     - ky, omega, diff, 1-ineq

       where,

       - **ky**: Field-line-label (poloidal) wavenumber :math:`k_y` [:math:`\rho_\mathrm{ref}^{-1}`] (real)

       - **omega**: Complex linear frequency :math:`\omega` = (real frequency, growthrate) [:math:`v_\mathrm{ref}/L_\mathrm{ref}`] (real, real)

       - **diff**: Relative residual error :math:`\frac{\omega(t) - \omega(t-\Delta t)}{\omega(t)}` (real, real)

       - **1-ineq**: Convergence check based on Schwartz inequality (real)

       At the end of run, estimated complex frequency for :math:`k_x = 0` are dumped. If some modes are not yet converged, they are commented out.

.. list-table:: log/gkvp.(rankg in 6 digits).(ranks in 1 digit).log.(inum in 3 digits)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - File type
     - ``Ascii``
   * - Output timing
     - ``As needed``
   * - MPI ranks
     - ``All``
   * - Total files
     - ``nprocw*nprocz*nprocv*nprocm*nprocs*(Total run numbers)``
   * - GKV unit
     - ``olog``
   * - Stored data
     - ``Simulation log``
