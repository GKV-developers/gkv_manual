.. _sec_list-of-gkv-namelist:

List of GKV namelist
====================

.. _list-of-gkv-namelist:

.. list-table:: List of run/gkvp_namelist
   :widths: 6 8 40
   :header-rows: 1

   * - **Group**
     - **Name**
     - **Parameter**

   * - &cmemo
     - memo
     - Memo

   * - &calct
     - calc_type
     -
       + "linear" -- for linear runs
       + "lin_freq" -- for linear runs with frequency check :math:`k_x = 0`
       + "nonlinear" -- for nonlinear runs
   * - :ditto:`&calct`
     - z_bound
     -
       + "zerofixed" -- Fixed boundary in :math:`z`
       + "mixed" -- Outflow boundary in :math:`z` only for :math:`\tilde{f}_{\mathrm{s}\bm{k}}`
   * - :ditto:`&calct`
     - z_filt
     -
       + "on" -- Enable 4th-order filtering in :math:`z` on :math:`d\tilde{f}_{\mathrm{s}\bm{k}}/dt`
       + "off" — Disable filtering
   * - :ditto:`&calct`
     - z_calc
     -
       + "cf4" -- 4th-order central finite difference for :math:`d\tilde{f}_{\mathrm{s}\bm{k}}/dz` (:math:`\texttt{nzb}=2`)
       + "up5" -- 5th-order upwind finite difference for :math:`d\tilde{f}_{\mathrm{s}\bm{k}}/dz` (:math:`\texttt{nzb}=3`)
   * - :ditto:`&calct`
     - art_diff
     - Coefficient of artificial diffusion for z_calc="cf4"
   * - :ditto:`&calct`
     - init_random
     - Switch whether phases of initial Fourier modes are randomized
   * - :ditto:`&calct`
     - num_triad_diag
     - Number of triad transfer diagnostics, which should be consistent with the number of "&triad mxt=*, myt=*/".
   * - :ditto:`&calct`
     - vp_coord
     -
       + "0" — the magnetic moment mu is the perpendicular velocity-space coordinate
       + "1" — the perpendicular velocity vp is the perpendicular velocity-space coordinate

   * - &triad
     - mxt=*, myt=*/
     - Diagnosed mode number of triad transfer analysis. Add lines of "&triad mxt=*,myt=*/" as desire.

   * - &equib
     - equib_type
     -
       + "analytic" -- Analytic helical field with the metrics in cylinder
       + "s-alpha" -- s-alpha model with alpha = 0 (cylindrical metrics)
       + "s-alpha-shift" -- s-alpha model with Shafranov shift
       + "circ-MHD" -- Concentric circular field with consistent metrics
       + "vmec" -- Tokamak/stellarator field from the VMEC code
       + "eqdsk" -- Tokamak field (MEUDAS/TOPICS or G-EQDSK) via IGS code
       + "slab" -- Shearless slab geometry
       + "ring" -- Ring dipole geometry

   * - &run_n
     - inum
     - Current run number
   * - :ditto:`&run_n`
     - ch_res
     -
       + .true. -- Change perpendicular resolutions (editing ``gkvp_f0.48_set.f90`` is required.)
       + .false. -- Disable changing resolution

   * - &files
     - f_log
     - Data directory for log data
   * - :ditto:`&files`
     - f_hst
     - Data directory for time-series data
   * - :ditto:`&files`
     - f_phi
     - Data directory for field quantity data
   * - :ditto:`&files`
     - f_fxv
     - Data directory for distribution function data
   * - :ditto:`&files`
     - f_cnt
     - Data directory for continue data

   * - &runlm
     - e_limit
     - Elapsed time limit [sec]

   * - &times
     - tend
     - End of simulation time [L_ref/v_ref]
   * - :ditto:`&times`
     - dtout_fxv
     - Time spacing for data output [L_ref/v_ref]
   * - :ditto:`&times`
     - dtout_ptn
     - Time spacing for data output [L_ref/v_ref]
   * - :ditto:`&times`
     - dtout_eng
     - Time spacing for data output [L_ref/v_ref]
   * - :ditto:`&times`
     - dtout_dtc
     - Time spacing for time-step-size adaption [L_ref/v_ref]

   * - &deltt
     - dt_max
     - Maximum time step size [L_ref/v_ref]
   * - :ditto:`&deltt`
     - adapt_dt
     -
       + .true. -- Enable time-step-size adaption
       + .false. -- Time step size is fixed to be dt = dt_max
   * - :ditto:`&deltt`
     - courant_num
     - Courant number for time-step-size adaption
   * - :ditto:`&deltt`
     - time_advnc
     -
       + "rkg4" -- Explicit time integration by 4th-order Runge-Kutta-Gill method
       + "imp_colli" -- 2nd-order operator split + 2nd-order implicit collision solver + 4th-order RKG method for collisionless physics
       + "auto_init" --

         - If collision restricts linear time step size, time_advnc="imp_colli".
         - Otherwise, time_advnc="rkg4"

   * - &physp
     - R0_Ln
     - Normalized density gradient, L_ref/L_ne, L_ref/L_ni, ...
   * - :ditto:`&physp`
     - R0_Lt
     - Normalized temperature gradient, L_ref/L_te, L_ref/L_ti, ...
   * - :ditto:`&physp`
     - nu
     - Bias factor for LB collision model, e.g., 1.d0, 0.5d0, 2.d0, ...

       .. note::

          NOTE that after gkvp_f0.40, collision frequencies are consistently calculated by (Nref, Tref, Lref) in &nu_ref,
          and nu is just used as a bias factor only for LB case. Also, nu is not used in multi-species collisions (full).
   * - :ditto:`&physp`
     - Anum
     - Mass number, m_e/m_ref, m_i/m_ref, ...
   * - :ditto:`&physp`
     - Znum
     - Atomic number, \|e_e/e_ref\|, \|e_i/e_ref\|, ...
   * - :ditto:`&physp`
     - fcs
     - Charge fraction \|e_e*n_e/(e_ref*n_ref)\|, \|e_i*n_i/(e_ref*n_ref)\|, ...

       .. note::

          NOTE that fcs = 1.0 for electron in the recommended setting (n_ref = n_e).
   * - :ditto:`&physp`
     - sgn
     - Sign of charge, e_e/ \|e_e\|, e_i/ \|e_i\|, ...
   * - :ditto:`&physp`
     - tau
     - Normalized temperature, T_e/T_ref, T_i/T_ref, ...

       .. note::

          NOTE that T_i/T_ref = 1.0 for the first ion species in the recommended setting (T_ref = T_i of first ion).
   * - :ditto:`&physp`
     - dns1
     - Initial perturbation amplitude, (L_ref/rho_ref)* :math:`\tilde{n}_\mathrm{e}`/n_ref, (L_ref/rho_ref)* :math:`\tilde{n}_\mathrm{i}`/n_ref, ...
   * - :ditto:`&physp`
     - tau_ad
     - T_i/T_e for single species ITG-ae (sgn=+1), T_e/T_i for single species ETG-ai (sgn=-1)
   * - :ditto:`&physp`
     - lambda_i
     - Ratio of (Debye_length / rho_ref)**2 = epsilon_0 * B_ref**2 / (m_ref * n_ref)
   * - :ditto:`&physp`
     - beta
     - Local beta value evaluated by mu_0*n_ref*T_ref/B_ref**2
   * - :ditto:`&physp`
     - ibprime
     -
      + "1" -- Enable a grad-p (finite beta-prime) contribution on the magnetic drift kvd for equib_type = "eqdsk" and "vmec"
      + "0" -- Ignore it
   * - :ditto:`&physp`
     - vmax
     - Velocity domain size in the unit of each thermal speed [v_ts]
   * - :ditto:`&physp`
     - nx0
     - Radial mode number assigned for the initial perturbation

       .. note::

          NOTE that if nx0 exceeds nx, nx0 is reset to nx.
          A sufficiently large value, thus, gives perturbations for entire kx-modes.

   * - &rotat
     - mach
     - Not yet implemented
   * - :ditto:`&rotat`
     - uprime
     - Not yet implemented
   * - :ditto:`&rotat`
     - gamma_e
     - Equilibrium :math:`\bm{E} \times \bm{B}` flow shearing rate :math:`\gamma_E`

   * - &nperi
     - n_tht
     - The length of fluxtube, :math:`z`-domain :math:`= \pm` N_tht* :math:`\pi`
   * - :ditto:`&nperi`
     - kymin
     - Minimum field-line-label (or poloidal) wave number [1/rho_ref]
   * - :ditto:`&nperi`
     - m_j
     - Mode connection number for pseudo-periodic boundary in fluxtube, kxmin = \|2*pi*s_hat*kymin/m_j\|
   * - :ditto:`&nperi`
     - del_c
     - Mode connection phase in fluxtube model (Since it is arbitrary, del_c = 0.d0 in standard.)

   * - &confp
     - eps_r
     - Inverse aspect ratio at the center of fluxtube, a*rho_0/L_ref
   * - :ditto:`&confp`
     - eps_rnew
     - Model factor for equib_type = "analytic"
   * - :ditto:`&confp`
     - q_0
     - Safety factor at the center of fluxtube, q(rho_0)
   * - :ditto:`&confp`
     - s_hat
     - Magnetic shear at the center of fluxtube, s(rho_0)
   * - :ditto:`&confp`
     - lprd

       :math:`\vdots`

       malpha
     - factor for equib_type = "analytic"

   * - &ring
     - ring_a
     - ring_a = a / R0, which specify a flux tube of the ring dipole.
       [There is a ring current at R=a. The field line passing through (R,Z)=(R0,0) is picked up as a flux-tube domain.
       The reference length is set to be R0 (not the ring current at R=a). The reference magnetic field strength is B0 at (R,Z)=(R0,0).]
   * - :ditto:`&ring`
     - kxmin
     - Minimum wavenumber in kx, valid only when equib_type == "ring"

   * - &vmecp
     - s_input
     - Minor radial position of the local flux-tube analysis in Stellarator (VMEC) equilibrium?
   * - :ditto:`&vmecp`
     - nss
     - Number of radial grids on METRIC data (=nrho in BZX)
   * - :ditto:`&vmecp`
     - ntheta
     - ntheta = (number of poloidal grids on METRIC = ntht in BZX) = 2*global_nz
   * - :ditto:`&vmecp`
     - nzeta
     - = 0

   * - &bozxf
     - f_bozx
     - File location of METRIC data produced by BZX code

   * - &igsp
     - s_input
     - Reference radial flux surface, rho_0, in Tokamak (MEUDAS/TOPICS or G-EQDSK) equilibrium
   * - :ditto:`&igsp`
     - mc_type
     -
       + "0" -- Axisymmetric coordinates
       + "1" -- Boozer coordinates
       + "2" -- Hamada coordinates
   * - :ditto:`&igsp`
     - q_type
     -
       + "1" -- Use consistent q-value on g-eqdsk equilibrium (Recommended)
       + "0" -- Use inconsistent, but given q_0 value in &confp.
   * - :ditto:`&igsp`
     - nss
     - Number of radial grids on METRIC data
   * - :ditto:`&igsp`
     - ntheta
     - ntheta = (number of poloidal grids on METRIC = ntht in BZX) = 2*global_nz

   * - &igsf
     - f_igs
     - File location of METRIC data produced by IGS code

   * - &nu_ref
     - Nref
     - Local electron density at the center of fluxtube, :math:`n_\mathrm{e}(\rho_0)` [m\^-3]
   * - :ditto:`&nu_ref`
     - Lref
     - Major radius at the magnetic axis, :math:`R_a` [m]
   * - :ditto:`&nu_ref`
     - Tref
     - Main ion temperature at the center of fluxtube :math:`T_i(\rho_0)` [keV]
   * - :ditto:`&nu_ref`
     - col_type
     -
       + "LB" -- Lenard-Bernstein model collision operator
       + "lorentz" -- Lorentz model collision operator
       + "full" -- Sugama model collision operator for multiple plasma species
   * - :ditto:`&nu_ref`
     - iFLR
     -
       + "1" -- Enable the FLR (gyrophase-averaging and classical diffusion) terms (for LB and full)
       + "0" -- Disable it (DK-limit)
   * - :ditto:`&nu_ref`
     - icheck
     -
       + "0" -- for production runs
       + "1" -- Debug test with Maxwellian Annihilation (should be used with iFLR = 0)


.. note::

   Note that ``inum=%%%`` and ``f_**="%%DIR%%/..."`` will be automatically set
   by the ``shoot`` script. In the ``&physp`` group, species-dependent names
   ``R0_Ln – dns1`` are the array of length ``nprocs``. The ``&vmecp`` and
   ``&bozxf`` groups are active only when ``equib_type = "vmec"``. Similarly,
   the ``&igsp`` and ``&igsf`` groups are active only when
   ``equib_type = "eqdsk"``.
