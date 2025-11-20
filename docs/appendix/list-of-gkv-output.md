# List of GKV output {#sec:list-of-gkv-output}

GKV output files are:

-   The output directory `DIR/`

    -   `cnt/*cnt*`

    -   `fxv/*fxv*`

    -   `phi/*phi*, *Al*, *mom*, *trn*, (*tri* for nonlinear runs)`

    -   `hst/*bln*, *geq*, *gem*, *qes*, *qem*, *wes*, *wem*, *eng*, *men*, *dtc*, *mtr*, (*frq*, *dsp* for linear runs)`

    -   `log/*log*`

Their explanations are summarized below.

**Explanations on GKV output files**

cnt/gkvp_f0.48.(rankg in 6 digits).cnt.(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Binary` |
| Output timing | `End of the run` |
| MPI ranks     | `All` |
| Total files   | `nprocw*nprocz*nprocv*nprocm*nprocs*(Total run numbers)` |
| GKV unit      | `ocnt` |
| Stored data   | `time, ff`<br><span class="api-vars"><strong>time</strong> (real*8): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><br><strong>ff(-nx:nx,0:ny,-nz:nz-1,1:2*nv,0:nm)</strong> (complex*8): Perturbed distribution function <span class="arithmatex">\( \tilde{f}_{\mathrm{s}\mathbf{k}} \)</span>.</span> |

fxv/gkvp_f0.48.(rankg in 6 digits).(ranks in 1 digit).fxv.(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Binary` |
| Output timing | `dtout_fxv` |
| MPI ranks     | `All` |
| Total files   | `nprocw*nprocz*nprocv*nprocm*nprocs*(Total run numbers)` |
| GKV unit      | `ofxv` |
| Stored data   | `time, ff`<br><span class="api-vars"><strong>time</strong> (real*8): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><br><strong>ff(-nx:nx,0:ny,1:2*nv,0:nm)</strong> (complex*8): Perturbed distribution function <span class="arithmatex">\( \tilde{f}_{\mathrm{s}\mathbf{k}} \)</span> at <code>iz = -nz</code> in each <code>rankz</code>.</span> |

phi/gkvp_f0.48.(rankg in 6 digits).0.phi.(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Binary` |
| Output timing | `dtout_ptn` |
| MPI ranks     | `ranks == 0 .and. vel_rank == 0` |
| Total files   | `nprocw*nprocz*(Total run numbers)` |
| GKV unit      | `ophi` |
| Stored data   | `time, phi`<br><span class="api-vars"><strong>time</strong> (real*8): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><br><strong>phi(-nx:nx,0:ny,-nz:nz-1)</strong> (complex*8): Perturbed electrostatic potential <span class="arithmatex">\( \tilde{\phi}_{\mathbf{k}} \)</span>.</span> |

phi/gkvp_f0.48.(rankg in 6 digits).0.Al.(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Binary` |
| Output timing | `dtout_ptn` |
| MPI ranks     | `ranks == 0 .and. vel_rank == 0` |
| Total files   | `nprocw*nprocz*(Total run numbers)` |
| GKV unit      | `oAl` |
| Stored data   | `time, Al`<br><span class="api-vars"><strong>time</strong> (real*8): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><br><strong>Al(-nx:nx,0:ny,-nz:nz-1)</strong> (complex*8): Perturbed vector potential <span class="arithmatex">\( \tilde{A}_{\parallel\mathbf{k}} \)</span>.</span> |

phi/gkvp_f0.48.(rankg in 6 digits).(ranks in 1 digit).mom.(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Binary` |
| Output timing | `dtout_ptn` |
| MPI ranks     | `vel_rank == 0` |
| Total files   | `nprocw*nprocz*nprocs*(Total run numbers)` |
| GKV unit      | `omom` |
| Stored data   | `time, mom`<br><span class="api-vars"><strong>time</strong> (real*8): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><br><strong>mom(-nx:nx,0:ny,-nz:nz-1,0:nmom-1)</strong> (complex*8): Perturbed fluid moments. In the present version <code>nmom = 6</code>:<ul><li><span class="arithmatex">\( \tilde{n}_{\mathrm{s}\mathbf{k}} = \int dv^3\, J_{0\mathrm{s}\mathbf{k}}\, \tilde{f}_{\mathrm{s}\mathbf{k}} \)</span></li><li><span class="arithmatex">\( \tilde{u}_{\parallel\mathrm{s}\mathbf{k}} = \int dv^3\, v_\parallel\, J_{0\mathrm{s}\mathbf{k}}\, \tilde{f}_{\mathrm{s}\mathbf{k}} \)</span></li><li><span class="arithmatex">\( \tilde{p}_{\parallel\mathrm{s}\mathbf{k}} = \int dv^3\, \frac{m_\mathrm{s} v_\parallel^2}{2}\, J_{0\mathrm{s}\mathbf{k}}\, \tilde{f}_{\mathrm{s}\mathbf{k}} \)</span></li><li><span class="arithmatex">\( \tilde{p}_{\perp\mathrm{s}\mathbf{k}} = \int dv^3\, \mu B\, J_{0\mathrm{s}\mathbf{k}}\, \tilde{f}_{\mathrm{s}\mathbf{k}} \)</span></li><li><span class="arithmatex">\( \tilde{q}_{\parallel\parallel\mathrm{s}\mathbf{k}} = \int dv^3\, v_\parallel \frac{m_\mathrm{s} v_\parallel^2}{2}\, J_{0\mathrm{s}\mathbf{k}}\, \tilde{f}_{\mathrm{s}\mathbf{k}} \)</span></li><li><span class="arithmatex">\( \tilde{q}_{\parallel\perp\mathrm{s}\mathbf{k}} = \int dv^3\, v_\parallel \mu B\, J_{0\mathrm{s}\mathbf{k}}\, \tilde{f}_{\mathrm{s}\mathbf{k}} \)</span></li></ul>Normalized by <span class="arithmatex">\( \delta_\mathrm{ref}n_\mathrm{ref} \)</span>, <span class="arithmatex">\( \delta_\mathrm{ref}n_\mathrm{ref}v_\mathrm{ref} \)</span>, <span class="arithmatex">\( \delta_\mathrm{ref}n_\mathrm{ref}T_\mathrm{ref} \)</span>, <span class="arithmatex">\( \delta_\mathrm{ref}n_\mathrm{ref}T_\mathrm{ref} \)</span>, <span class="arithmatex">\( \delta_\mathrm{ref}n_\mathrm{ref}T_\mathrm{ref}v_\mathrm{ref} \)</span>, <span class="arithmatex">\( \delta_\mathrm{ref}n_\mathrm{ref}T_\mathrm{ref}v_\mathrm{ref} \)</span>, respectively.</span> |

phi/gkvp_f0.48.(rankg in 6 digits).(ranks in 1 digit).trn.(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Binary` |
| Output timing | `dtout_eng` |
| MPI ranks     | `zsp_rank == 0 .and. vel_rank == 0` |
| Total files   | `nprocw*nprocs*(Total run numbers)` |
| GKV unit      | `otrn` |
| Stored data   | <code>time, S_{s k}, W_{E k}, W_{M k}, R_{sE k}, R_{sM k}, I_{sE k}, I_{sM k}, D_{s k}, Γ_{sE k}, Γ_{sM k}, Q_{sE k}, Q_{sM k}</code><br><span class="api-vars"><strong>time</strong> (real*8): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><ul><li><span class="arithmatex">\( S_{\mathrm{s}\mathbf{k}}(-nx:nx,0:ny) \)</span>: Perturbed gyrocenter entropy <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( W_{\mathrm{E}\mathbf{k}}(-nx:nx,0:ny) \)</span>: Electrostatic field energy including polarization <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( W_{\mathrm{M}\mathbf{k}}(-nx:nx,0:ny) \)</span>: Magnetic field energy <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( R_{\mathrm{sE}\mathbf{k}}(-nx:nx,0:ny) \)</span>: Wave–particle interaction <span class="arithmatex">\( ( W_{\mathrm{E}\mathbf{k}} \rightarrow S_{\mathrm{s}\mathbf{k}} ) \)</span> <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( R_{\mathrm{sM}\mathbf{k}}(-nx:nx,0:ny) \)</span>: Wave–particle interaction <span class="arithmatex">\( ( W_{\mathrm{M}\mathbf{k}} \rightarrow S_{\mathrm{s}\mathbf{k}} ) \)</span> <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( I_{\mathrm{sE}\mathbf{k}}(-nx:nx,0:ny) \)</span>: Nonlinear entropy transfer by <span class="arithmatex">\( \mathbf{E}\times\mathbf{B} \)</span> flow <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( I_{\mathrm{sM}\mathbf{k}}(-nx:nx,0:ny) \)</span>: Nonlinear entropy transfer by magnetic flutter <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( D_{\mathrm{s}\mathbf{k}}(-nx:nx,0:ny) \)</span>: Collisional dissipation <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( \Gamma_{\mathrm{sE}\mathbf{k}}(-nx:nx,0:ny) \)</span>: Particle flux by <span class="arithmatex">\( \mathbf{E}\times\mathbf{B} \)</span> flow <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} v_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( \Gamma_{\mathrm{sM}\mathbf{k}}(-nx:nx,0:ny) \)</span>: Particle flux by magnetic flutter <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} v_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( Q_{\mathrm{sE}\mathbf{k}}(-nx:nx,0:ny) \)</span>: Energy flux by <span class="arithmatex">\( \mathbf{E}\times\mathbf{B} \)</span> flow <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( Q_{\mathrm{sM}\mathbf{k}}(-nx:nx,0:ny) \)</span>: Energy flux by magnetic flutter <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}] \)</span> (real*8)</li></ul><em>See also [Appendix X](../supplemental/supplemental.md#sec:entropy-balance-equation-for-each-wavenumber-and-plasma-species){ .sec-ref data-target-id="sec:entropy-balance-equation-for-each-wavenumber-and-plasma-species" data-prefix="Appendix" }. </em></span> |

phi/gkvp_f0.48.s(ranks in 1 digits)mx(mxt in 4 digits)my(myt in 4 digits).tri.(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Binary` |
| Output timing | `dtout_ptn` (when `calc_type == "nonlinear"` and `num_triad_diag > 0`) |
| MPI ranks     | `rank == 0` |
| Total files   | `nprocs*num_triad_diag*(Total run numbers)` |
| GKV unit      | `otri` |
| Stored data   | <code>time, J_{sE k}^{p,q}, J_{sE p}^{q,k}, J_{sE q}^{k,p}, J_{sM k}^{p,q}, J_{sM p}^{q,k}, J_{sM q}^{k,p}</code><br><span class="api-vars"><strong>time</strong> (real*8): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><ul><li><span class="arithmatex">\( J_{\mathrm{sE}\mathbf{k}}^{\mathbf{p,q}}(-nx:nx,-global_{y}:global_{y}) \)</span>: Triad transfer function from modes <span class="arithmatex">\( \mathbf{p}, \mathbf{q} \)</span> to mode <span class="arithmatex">\( \mathbf{k} \)</span> via <span class="arithmatex">\( \mathbf{E}\times\mathbf{B} \)</span> nonlinearity <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( J_{\mathrm{sE}\mathbf{p}}^{\mathbf{q,k}}(-nx:nx,-global_{y}:global_{y}) \)</span>: Cyclic change <span class="arithmatex">\( (\mathbf{k,p,q}) \rightarrow (\mathbf{p,q,k}) \)</span> (real*8)</li><li><span class="arithmatex">\( J_{\mathrm{sE}\mathbf{q}}^{\mathbf{k,p}}(-nx:nx,-global_{y}:global_{y}) \)</span>: Cyclic change <span class="arithmatex">\( (\mathbf{p,q,k}) \rightarrow (\mathbf{q,k,p}) \)</span> (real*8)</li><li><span class="arithmatex">\( J_{\mathrm{sM}\mathbf{k}}^{\mathbf{p,q}}(-nx:nx,-global_{y}:global_{y}) \)</span>: Triad transfer function from modes <span class="arithmatex">\( \mathbf{p}, \mathbf{q} \)</span> to mode <span class="arithmatex">\( \mathbf{k} \)</span> via magnetic-flutter nonlinearity <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( J_{\mathrm{sM}\mathbf{p}}^{\mathbf{q,k}}(-nx:nx,-global_{y}:global_{y}) \)</span>: Cyclic change <span class="arithmatex">\( (\mathbf{k,p,q}) \rightarrow (\mathbf{p,q,k}) \)</span> (real*8)</li><li><span class="arithmatex">\( J_{\mathrm{sM}\mathbf{q}}^{\mathbf{k,p}}(-nx:nx,-global_{y}:global_{y}) \)</span>: Cyclic change <span class="arithmatex">\( (\mathbf{p,q,k}) \rightarrow (\mathbf{q,k,p}) \)</span> (real*8)</li></ul>Diagnosed for a fixed mode <span class="arithmatex">\( \mathbf{k} = (\texttt{mxt,myt}) \)</span> and plotted as a 2D function of <span class="arithmatex">\( \mathbf{p} = (p_x,p_y) \)</span>, where the triad condition determines <span class="arithmatex">\( \mathbf{q} = -\mathbf{k}-\mathbf{p} \)</span>. <em>See also [Appendix X](../supplemental/supplemental.md#sec:triad-transfer-function){ .sec-ref data-target-id="sec:triad-transfer-function" data-prefix="Appendix" }. </em> </span> |

hst/gkvp_f0.48.bln.(ranks in 1 digits).(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Ascii` |
| Output timing | `dtout_eng` |
| MPI ranks     | `rank == 0` |
| Total files   | `nprocs*(Total run numbers)` |
| GKV unit      | `obln` |
| Stored data   | <code>time, S_s, W_E, W_M, R_sE, R_sM, I_sE, I_sM, D_s, (T_s Γ_sE)/L_ps, (T_s Γ_sM)/L_ps, Θ_sE/L_Ts, Θ_sM/L_Ts</code><br><span class="api-vars"><strong>time</strong> (real*8): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><ul><li><span class="arithmatex">\( S_\mathrm{s}(0:1) \)</span>: Perturbed gyrocenter entropy <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( W_\mathrm{E}(0:1) \)</span>: Electrostatic field energy including polarization <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( W_\mathrm{M}(0:1) \)</span>: Magnetic field energy <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( R_\mathrm{sE}(0:1) \)</span>: Wave–particle interaction from <span class="arithmatex">\( W_{\mathrm{E}\mathbf{k}} \)</span> to <span class="arithmatex">\( S_{\mathrm{s}\mathbf{k}} \)</span> <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( R_\mathrm{sM}(0:1) \)</span>: Wave–particle interaction from <span class="arithmatex">\( W_{\mathrm{M}\mathbf{k}} \)</span> to <span class="arithmatex">\( S_{\mathrm{s}\mathbf{k}} \)</span> <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( I_\mathrm{sE}(0:1) \)</span>: Nonlinear entropy transfer by <span class="arithmatex">\( \mathbf{E}\times\mathbf{B} \)</span> flow <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( I_\mathrm{sM}(0:1) \)</span>: Nonlinear entropy transfer by magnetic flutter <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( D_\mathrm{s}(0:1) \)</span>: Collisional dissipation <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( \tfrac{T_\mathrm{s}\Gamma_\mathrm{sE}}{L_{p\mathrm{s}}} \)</span>: Particle flux term by <span class="arithmatex">\( \mathbf{E}\times\mathbf{B} \)</span> flow <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( \tfrac{T_\mathrm{s}\Gamma_\mathrm{sM}}{L_{p\mathrm{s}}} \)</span>: Particle flux term by magnetic flutter <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( \tfrac{\Theta_\mathrm{sE}}{L_{T\mathrm{s}}} \)</span>: Heat flux term by <span class="arithmatex">\( \mathbf{E}\times\mathbf{B} \)</span> flow <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real*8)</li><li><span class="arithmatex">\( \tfrac{\Theta_\mathrm{sM}}{L_{T\mathrm{s}}} \)</span>: Heat flux term by magnetic flutter <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real*8)</li></ul>The 0th and 1st components of <span class="arithmatex">\( S_\mathrm{s} \)</span>–<span class="arithmatex">\( D_\mathrm{s} \)</span> correspond to non-zonal <span class="arithmatex">\( (k_y\neq 0) \)</span> and zonal <span class="arithmatex">\( (k_y=0) \)</span> fluctuations, respectively.</span> |

hst/gkvp_f0.48.ges.(ranks in 1 digits).(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Ascii` |
| Output timing | `dtout_eng` |
| MPI ranks     | `rank == 0` |
| Total files   | `nprocs*(Total run numbers)` |
| GKV unit      | `oges` |
| Stored data   | `time, Γ_sE, Γ_{sE k_y}`<br><span class="api-vars"><strong>time</strong> (real): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><br><span class="arithmatex">\( \Gamma_\mathrm{sE} \)</span>: Total particle flux by <span class="arithmatex">\( \mathbf{E}\times\mathbf{B} \)</span> flow <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} v_\mathrm{ref}] \)</span> (real)<br><span class="arithmatex">\( \Gamma_{\mathrm{sE}k_y}(0:global\_ny) \)</span>: <span class="arithmatex">\( k_y \)</span> spectrum of the particle flux by <span class="arithmatex">\( \mathbf{E}\times\mathbf{B} \)</span> flow (same units) (real).</span> |

hst/gkvp_f0.48.gem.(ranks in 1 digits).(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Ascii` |
| Output timing | `dtout_eng` |
| MPI ranks     | `rank == 0` |
| Total files   | `nprocs*(Total run numbers)` |
| GKV unit      | `ogem` |
| Stored data   | `time, Γ_sM, Γ_{sM k_y}`<br><span class="api-vars"><strong>time</strong> (real): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><br><span class="arithmatex">\( \Gamma_\mathrm{sM} \)</span>: Total particle flux by magnetic flutter <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} v_\mathrm{ref}] \)</span> (real)<br><span class="arithmatex">\( \Gamma_{\mathrm{sM}k_y}(0:global\_ny) \)</span>: <span class="arithmatex">\( k_y \)</span> spectrum of the particle flux by magnetic flutter (same units) (real).</span> |

hst/gkvp_f0.48.qes.(ranks in 1 digits).(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Ascii` |
| Output timing | `dtout_eng` |
| MPI ranks     | `rank == 0` |
| Total files   | `nprocs*(Total run numbers)` |
| GKV unit      | `oqes` |
| Stored data   | `time, Q_sE, Q_{sE k_y}`<br><span class="api-vars"><strong>time</strong> (real): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><br><span class="arithmatex">\( Q_\mathrm{sE} \)</span>: Total energy flux by <span class="arithmatex">\( \mathbf{E}\times\mathbf{B} \)</span> flow <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}] \)</span> (real)<br><span class="arithmatex">\( Q_{\mathrm{sE}k_y}(0:global\_ny) \)</span>: <span class="arithmatex">\( k_y \)</span> spectrum of the energy flux by <span class="arithmatex">\( \mathbf{E}\times\mathbf{B} \)</span> flow (same units) (real).</span> |

hst/gkvp_f0.48.qem.(ranks in 1 digits).(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Ascii` |
| Output timing | `dtout_eng` |
| MPI ranks     | `rank == 0` |
| Total files   | `nprocs*(Total run numbers)` |
| GKV unit      | `oqem` |
| Stored data   | `time, Q_sM, Q_{sM k_y}`<br><span class="api-vars"><strong>time</strong> (real): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><br><span class="arithmatex">\( Q_\mathrm{sM} \)</span>: Total energy flux by magnetic flutter <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref} v_\mathrm{ref}] \)</span> (real)<br><span class="arithmatex">\( Q_{\mathrm{sM}k_y}(0:global\_ny) \)</span>: <span class="arithmatex">\( k_y \)</span> spectrum of the energy flux by magnetic flutter (same units) (real).</span> |

hst/gkvp_f0.48.wes.(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Ascii` |
| Output timing | `dtout_eng` |
| MPI ranks     | `rankg == 0` |
| Total files   | `(Total run numbers)` |
| GKV unit      | `owes` |
| Stored data   | `time, W_E, W_{E k_y}`<br><span class="api-vars"><strong>time</strong> (real): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><br><span class="arithmatex">\( W_\mathrm{E} \)</span>: Total electrostatic field energy including polarization <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref}] \)</span> (real)<br><span class="arithmatex">\( W_{\mathrm{E}k_y}(0:global\_ny) \)</span>: <span class="arithmatex">\( k_y \)</span> spectrum of the electrostatic field energy (same units) (real).</span> |

hst/gkvp_f0.48.wem.(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Ascii` |
| Output timing | `dtout_eng` |
| MPI ranks     | `rankg == 0` |
| Total files   | `(Total run numbers)` |
| GKV unit      | `owem` |
| Stored data   | `time, W_M, W_{M k_y}`<br><span class="api-vars"><strong>time</strong> (real): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><br><span class="arithmatex">\( W_\mathrm{M} \)</span>: Total magnetic field energy <span class="arithmatex">\( [\delta_\mathrm{ref}^2 n_\mathrm{ref} T_\mathrm{ref}] \)</span> (real)<br><span class="arithmatex">\( W_{\mathrm{M}k_y}(0:global\_ny) \)</span>: <span class="arithmatex">\( k_y \)</span> spectrum of the magnetic field energy (same units) (real).</span> |

hst/gkvp_f0.48.eng.(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Ascii` |
| Output timing | `dtout_eng` |
| MPI ranks     | `rankg == 0` |
| Total files   | `(Total run numbers)` |
| GKV unit      | `oeng` |
| Stored data   | <code>time, sum_{kx,ky} &lt;|phi_k|^2&gt;, sum_{kx} &lt;|phi_k|^2&gt;</code><br><span class="api-vars"><strong>time</strong> (real): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><br><span class="arithmatex">\( \displaystyle \sum_{k_x,k_y}\langle |\tilde{\phi}_{\mathbf{k}}|^2 \rangle \)</span>: Squared amplitude of the perturbed electrostatic potential <span class="arithmatex">\( [(\delta_\mathrm{ref}T_\mathrm{ref}/e_\mathrm{ref})^2] \)</span> (real)<br><span class="arithmatex">\( \displaystyle \sum_{k_x}\langle |\tilde{\phi}_{\mathbf{k}}|^2 \rangle (0:global\_ny) \)</span>: <span class="arithmatex">\( k_y \)</span> spectrum of the squared amplitude (same units) (real).</span> |

hst/gkvp_f0.48.men.(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Ascii` |
| Output timing | `dtout_eng` |
| MPI ranks     | `rankg == 0` |
| Total files   | `(Total run numbers)` |
| GKV unit      | `omen` |
| Stored data   | <code>time, sum_{kx,ky} &lt;|A_par,k|^2&gt;, sum_{kx} &lt;|A_par,k|^2&gt;</code><br><span class="api-vars"><strong>time</strong> (real): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><br><span class="arithmatex">\( \displaystyle \sum_{k_x,k_y}\langle |\tilde{A}_{\parallel\mathbf{k}}|^2 \rangle \)</span>: Squared amplitude of the perturbed vector potential <span class="arithmatex">\( [(\delta_\mathrm{ref}\rho_\mathrm{ref}B_\mathrm{ref})^2] \)</span> (real)<br><span class="arithmatex">\( \displaystyle \sum_{k_x}\langle |\tilde{A}_{\parallel\mathbf{k}}|^2 \rangle (0:global\_ny) \)</span>: <span class="arithmatex">\( k_y \)</span> spectrum of the squared amplitude (same units) (real).</span> |

hst/gkvp_f0.48.dtc.(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Ascii` |
| Output timing | `dtout_dtc` |
| MPI ranks     | `rankg == 0` |
| Total files   | `(Total run numbers)` |
| GKV unit      | `odtc` |
| Stored data   | `time, dt, dt_limit, dt_nl`<br><span class="api-vars"><strong>time</strong> (real): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><br><strong>dt</strong> (real): Time step size <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><br><strong>dt_limit</strong> (real): Estimate of timestep limit (same units)<br><strong>dt_nl</strong> (real): Estimate of timestep limit from nonlinear advection (same units).</span> |

hst/gkvp_f0.48.mtr.(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Ascii` |
| Output timing | `Beginning of the run` |
| MPI ranks     | `rankg == 0` |
| Total files   | `(Total run numbers)` |
| GKV unit      | `omtr` |
| Stored data   | <code>time, θ (or φ), B, dB/dx, dB/dy, dB/dz, g^{xx}, g^{xy}, g^{xz}, g^{yy}, g^{yz}, g^{zz}, sqrt(g)</code><br><span class="api-vars"><strong>time</strong> (real): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><br><span class="arithmatex">\( \theta \)</span>: Poloidal angle (or toroidal angle <span class="arithmatex">\( \varphi \)</span> when <code>equib_type = "vmec"</code>) (real)<br><span class="arithmatex">\( B \)</span>: Magnetic field strength <span class="arithmatex">\( [B_\mathrm{ref}] \)</span> (real)<br><span class="arithmatex">\( \partial B/\partial x, \partial B/\partial y, \partial B/\partial z \)</span>: Derivatives of <span class="arithmatex">\( B \)</span> <span class="arithmatex">\( [B_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real)<br>Metric tensor components: <span class="arithmatex">\( g^{xx}, g^{xy}, g^{xz} \)</span>, <span class="arithmatex">\( g^{yy}, g^{yz} \)</span>, <span class="arithmatex">\( g^{zz} \)</span> with units as in the text (real)<br><span class="arithmatex">\( \sqrt{g} \)</span>: Jacobian <span class="arithmatex">\( [L_\mathrm{ref}] \)</span> (real).</span> |

hst/gkvp_f0.48.frq.(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Ascii` |
| Output timing | `dtout_eng` (when `calc_type == "linear"` or `"lin_freq"`) |
| MPI ranks     | `rankg == 0` |
| Total files   | `(Total run numbers)` |
| GKV unit      | `ofrq` |
| Stored data   | `time, omega`<br><span class="api-vars"><strong>time</strong> (real): Simulation time <span class="arithmatex">\( t \)</span> <span class="arithmatex">\( [L_\mathrm{ref}/v_\mathrm{ref}] \)</span><br><strong>omega(1:global_ny)</strong>: <span class="arithmatex">\( k_y \)</span> spectrum of complex linear frequency <span class="arithmatex">\( \omega = \omega_\mathrm{r} + i\gamma \)</span> <span class="arithmatex">\( [v_\mathrm{ref}/L_\mathrm{ref}] \)</span> (real, real). Estimated for <span class="arithmatex">\( k_x = 0 \)</span> from<br><span class="arithmatex">\( \displaystyle \omega = \frac{\ln \tilde{\phi}_{\mathbf{k}}(t+\Delta t) - \ln \tilde{\phi}_{\mathbf{k}}(t)}{-\,i\,\Delta t} \)</span> assuming <span class="arithmatex">\( \tilde{\phi}_{\mathbf{k}}(t) \propto e^{-i\omega t} \)</span>.</span> |

hst/gkvp_f0.48.dsp.(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Ascii` |
| Output timing | `End of the run` (when `calc_type == "linear"` or `"lin_freq"`) |
| MPI ranks     | `rankg == 0` |
| Total files   | `(Total run numbers)` |
| GKV unit      | `odsp` |
| Stored data   | `ky, omega, diff, 1-ineq`<br><span class="api-vars"><strong>ky</strong> (real): Field-line-label (poloidal) wavenumber <span class="arithmatex">\( k_y \)</span> <span class="arithmatex">\( [\rho_\mathrm{ref}^{-1}] \)</span><br><strong>omega</strong> (real, real): Complex linear frequency <span class="arithmatex">\( \omega \)</span> <span class="arithmatex">\( [v_\mathrm{ref}/L_\mathrm{ref}] \)</span><br><strong>diff</strong> (real): Relative residual <span class="arithmatex">\( \displaystyle \frac{\omega(t)-\omega(t-\Delta t)}{\omega(t)} \)</span><br><strong>1-ineq</strong> (real): Convergence check based on Schwarz inequality.<br>At the end of the run, estimated complex frequencies for <span class="arithmatex">\( k_x = 0 \)</span> are dumped; unconverged modes may be commented out.</span> |

log/gkvp_f0.48.(rankg in 6 digits).(ranks in 1 digit).log.(inum in 3 digits)
{.api-signature}

| Field           | Description |
|:--------------|:------|
| File type     | `Ascii` |
| Output timing | `As needed` |
| MPI ranks     | `All` |
| Total files   | `nprocw*nprocz*nprocv*nprocm*nprocs*(Total run numbers)` |
| GKV unit      | `olog` |
| Stored data   | `Simulation log` |

