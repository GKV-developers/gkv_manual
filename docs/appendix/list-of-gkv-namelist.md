# List of GKV namelist {#sec:list-of-gkv-namelist}

<table>
  <caption>List of run/gkvp_f0.48_namelist</caption>
  <thead>
    <tr>
      <th>Group</th>
      <th>Name</th>
      <th>Parameter</th>
    </tr>
  </thead>
  <tbody>
    <!-- &cmemo -->
    <tr>
      <td style="vertical-align: top;">&amp;cmemo</td>
      <td>memo</td>
      <td><div markdown="1">Memo</div></td>
    </tr>

    <!-- &calct -->
    <tr>
      <td rowspan="12" style="vertical-align: top;">&amp;calct</td>
      <td rowspan="3" style="vertical-align: top;">calc_type</td>
      <td><div markdown="1">"linear" — for linear runs</div></td>
    </tr>
    <tr>
      <td><div markdown="1">"lin_freq" — for linear runs with frequency check <span class="arithmatex">\( k_x = 0 \)</span></div></td>
    </tr>
    <tr>
      <td><div markdown="1">"nonlinear" — for nonlinear runs</div></td>
    </tr>

    <tr>
      <td rowspan="3" style="vertical-align: top;">z_bound</td>
      <td><div markdown="1">"zerofixed" — Fixed boundary in <span class="arithmatex">\( z \)</span></div></td>
    </tr>
    <tr>
      <td><div markdown="1">"outflow" — Outflow boundary in <span class="arithmatex">\( z \)</span></div></td>
    </tr>
    <tr>
      <td><div markdown="1">"mixed" — Outflow boundary in <span class="arithmatex">\( z \)</span> only for <span class="arithmatex">\( \tilde{f}_{\mathrm{s}\mathbf{k}} \)</span></div></td>
    </tr>

    <tr>
      <td rowspan="2" style="vertical-align: top;">z_filt</td>
      <td><div markdown="1">"on" — Enable 4th-order filtering in <span class="arithmatex">\( z \)</span> on <span class="arithmatex">\( d\tilde{f}_{\mathrm{s}\mathbf{k}}/dt \)</span></div></td>
    </tr>
    <tr>
      <td><div markdown="1">"off" — Disable filtering</div></td>
    </tr>

    <tr>
      <td rowspan="2" style="vertical-align: top;">z_calc</td>
      <td><div markdown="1">"cf4" — 4th-order central finite difference for <span class="arithmatex">\( d\tilde{f}_{\mathrm{s}\mathbf{k}}/dz \)</span> (nzb=2)</div></td>
    </tr>
    <tr>
      <td><div markdown="1">"up5" — 5th-order upwind finite difference for <span class="arithmatex">\( d\tilde{f}_{\mathrm{s}\mathbf{k}}/dz \)</span> (nzb=3)</div></td>
    </tr>

    <tr>
      <td>art_diff</td>
      <td><div markdown="1">Coefficient of artificial diffusion for z_calc="cf4"</div></td>
    </tr>

    <tr>
      <td>num_triad_diag</td>
      <td><div markdown="1">Number of triad transfer diagnostics, consistent with the number of lines "&amp;triad mxt=*, myt=*".</div></td>
    </tr>

    <!-- &triad -->
    <tr>
      <td style="vertical-align: top;">&amp;triad</td>
      <td><div markdown="1">mxt=*, myt=*</div></td>
      <td><div markdown="1">Diagnosed mode number of triad transfer analysis. Add lines of "&amp;triad mxt=*, myt=*" as desired.</div></td>
    </tr>

    <!-- &equib -->
    <tr>
      <td rowspan="5" style="vertical-align: top;">&amp;equib</td>
      <td rowspan="5" style="vertical-align: top;">equib_type</td>
      <td><div markdown="1">"analytic" — Analytic helical field with the metrics in cylinder</div></td>
    </tr>
    <tr>
      <td><div markdown="1">"s-alpha" — s-alpha model with alpha = 0 (cylindrical metrics)</div></td>
    </tr>
    <tr>
      <td><div markdown="1">"circ-MHD" — Concentric circular field with consistent metrics</div></td>
    </tr>
    <tr>
      <td><div markdown="1">"vmec" — Tokamak/stellarator field from the VMEC code</div></td>
    </tr>
    <tr>
      <td><div markdown="1">"eqdsk" — Tokamak field (MEUDAS/TOPICS or G-EQDSK) via IGS code</div></td>
    </tr>

    <!-- &run_n -->
    <tr>
      <td rowspan="3" style="vertical-align: top;">&amp;run_n</td>
      <td>inum</td>
      <td><div markdown="1">Current run number</div></td>
    </tr>
    <tr>
      <td rowspan="2" style="vertical-align: top;">ch_res</td>
      <td><div markdown="1">.true. — Change perpendicular resolutions (editing gkvp_f0.48_set.f90 required)</div></td>
    </tr>
    <tr>
      <td><div markdown="1">.false. — Disable changing resolution</div></td>
    </tr>

    <!-- &files -->
    <tr>
      <td rowspan="5" style="vertical-align: top;">&amp;files</td>
      <td>f_log</td>
      <td><div markdown="1">Data directory for log data</div></td>
    </tr>
    <tr>
      <td>f_hst</td>
      <td><div markdown="1">Data directory for time-series data</div></td>
    </tr>
    <tr>
      <td>f_phi</td>
      <td><div markdown="1">Data directory for field quantity data</div></td>
    </tr>
    <tr>
      <td>f_fxv</td>
      <td><div markdown="1">Data directory for distribution function data</div></td>
    </tr>
    <tr>
      <td>f_cnt</td>
      <td><div markdown="1">Data directory for continue data</div></td>
    </tr>

    <!-- &runlm -->
    <tr>
      <td style="vertical-align: top;">&amp;runlm</td>
      <td>e_limit</td>
      <td><div markdown="1">Elapsed time limit [sec]</div></td>
    </tr>

    <!-- &times -->
    <tr>
      <td rowspan="5" style="vertical-align: top;">&amp;times</td>
      <td>tend</td>
      <td><div markdown="1">End of simulation time <span class="arithmatex">\( [L_{\mathrm{ref}}/v_{\mathrm{ref}}] \)</span></div></td>
    </tr>
    <tr>
      <td>dtout_fxv</td>
      <td><div markdown="1">Time spacing for data output <span class="arithmatex">\( [L_{\mathrm{ref}}/v_{\mathrm{ref}}] \)</span></div></td>
    </tr>
    <tr>
      <td>dtout_ptn</td>
      <td><div markdown="1">Time spacing for data output <span class="arithmatex">\( [L_{\mathrm{ref}}/v_{\mathrm{ref}}] \)</span></div></td>
    </tr>
    <tr>
      <td>dtout_eng</td>
      <td><div markdown="1">Time spacing for data output <span class="arithmatex">\( [L_{\mathrm{ref}}/v_{\mathrm{ref}}] \)</span></div></td>
    </tr>
    <tr>
      <td>dtout_dtc</td>
      <td><div markdown="1">Time spacing for time-step-size adaption <span class="arithmatex">\( [L_{\mathrm{ref}}/v_{\mathrm{ref}}] \)</span></div></td>
    </tr>

    <!-- &deltt -->
    <tr>
      <td rowspan="7" style="vertical-align: top;">&amp;deltt</td>
      <td>dt_max</td>
      <td><div markdown="1">Maximum time step size <span class="arithmatex">\( [L_{\mathrm{ref}}/v_{\mathrm{ref}}] \)</span></div></td>
    </tr>
    <tr>
      <td rowspan="2" style="vertical-align: top;">adapt_dt</td>
      <td><div markdown="1">.true. — Enable time-step-size adaption</div></td>
    </tr>
    <tr>
      <td><div markdown="1">.false. — Time step size fixed to dt = dt_max</div></td>
    </tr>
    <tr>
      <td>courant_num</td>
      <td><div markdown="1">Courant number for time-step-size adaption</div></td>
    </tr>
    <tr>
      <td rowspan="3" style="vertical-align: top;">time_advnc</td>
      <td><div markdown="1">"rkg4" — Explicit time integration by 4th-order Runge–Kutta–Gill</div></td>
    </tr>
    <tr>
      <td><div markdown="1">"imp_colli" — 2nd-order operator split + 2nd-order implicit collision solver + 4th-order RKG (collisionless)</div></td>
    </tr>
    <tr>
      <td><div markdown="1">"auto_init" — If collision restricts linear time step size, use "imp_colli"; otherwise "rkg4"</div></td>
    </tr>

    <!-- &physp -->
    <tr>
      <td rowspan="16" style="vertical-align: top;">&amp;physp</td>
      <td>R0_Ln</td>
      <td><div markdown="1">Normalized density gradient, <span class="arithmatex">\( L_{\mathrm{ref}}/L_{\mathrm{ne}} \)</span>, <span class="arithmatex">\( L_{\mathrm{ref}}/L_{\mathrm{ni}} \)</span>, ...</div></td>
    </tr>
    <tr>
      <td>R0_Lt</td>
      <td><div markdown="1">Normalized temperature gradient, <span class="arithmatex">\( L_{\mathrm{ref}}/L_{\mathrm{te}} \)</span>, <span class="arithmatex">\( L_{\mathrm{ref}}/L_{\mathrm{ti}} \)</span>, ...</div></td>
    </tr>
    <tr>
      <td>nu</td>
      <td><div markdown="1">Bias factor for LB collision model (e.g., 1.d0, 0.5d0, 2.d0). *After gkvp_f0.40, collision frequencies are set by (Nref, Tref, Lref) in &amp;nu_ref; nu is just a bias for LB and unused in multi-species (full).*</div></td>
    </tr>
    <tr>
      <td>Anum</td>
      <td><div markdown="1">Mass number, <span class="arithmatex">\( m_{\mathrm{e}}/m_{\mathrm{ref}} \)</span>, <span class="arithmatex">\( m_{\mathrm{i}}/m_{\mathrm{ref}} \)</span>, ...</div></td>
    </tr>
    <tr>
      <td>Znum</td>
      <td><div markdown="1">Atomic number, <span class="arithmatex">\( |e_{\mathrm{e}}/e_{\mathrm{ref}}| \)</span>, <span class="arithmatex">\( |e_{\mathrm{i}}/e_{\mathrm{ref}}| \)</span>, ...</div></td>
    </tr>
    <tr>
      <td>fcs</td>
      <td><div markdown="1">Charge fraction, <span class="arithmatex">\( |e_{\mathrm{e}} n_{\mathrm{e}}/(e_{\mathrm{ref}} n_{\mathrm{ref}})| \)</span>, <span class="arithmatex">\( |e_{\mathrm{i}} n_{\mathrm{i}}/(e_{\mathrm{ref}} n_{\mathrm{ref}})| \)</span>, ...  *Recommended: fcs = 1.0 for electrons (with n_ref = n_e).*</div></td>
    </tr>
    <tr>
      <td>sgn</td>
      <td><div markdown="1">Sign of charge, <span class="arithmatex">\( e_{\mathrm{e}}/|e_{\mathrm{e}}| \)</span>, <span class="arithmatex">\( e_{\mathrm{i}}/|e_{\mathrm{i}}| \)</span>, ...</div></td>
    </tr>
    <tr>
      <td>tau</td>
      <td><div markdown="1">Normalized temperature, <span class="arithmatex">\( T_{\mathrm{e}}/T_{\mathrm{ref}} \)</span>, <span class="arithmatex">\( T_{\mathrm{i}}/T_{\mathrm{ref}} \)</span>, ...  *Recommended: <span class="arithmatex">\( T_{\mathrm{i}}/T_{\mathrm{ref}} = 1.0 \)</span> for the first ion species.*</div></td>
    </tr>
    <tr>
      <td>dns1</td>
      <td><div markdown="1">Initial perturbation amplitude, <span class="arithmatex">\( (L_{\mathrm{ref}}/\rho_{\mathrm{ref}})\,\tilde{n}_{\mathrm{e}}/n_{\mathrm{ref}} \)</span>, <span class="arithmatex">\( (L_{\mathrm{ref}}/\rho_{\mathrm{ref}})\,\tilde{n}_{\mathrm{i}}/n_{\mathrm{ref}} \)</span>, ...</div></td>
    </tr>
    <tr>
      <td>tau_ad</td>
      <td><div markdown="1"><span class="arithmatex">\( T_{\mathrm{i}}/T_{\mathrm{e}} \)</span> for single-species ITG-ae (sgn=+1), <span class="arithmatex">\( T_{\mathrm{e}}/T_{\mathrm{i}} \)</span> for single-species ETG-ai (sgn=-1)</div></td>
    </tr>
    <tr>
      <td>lambda_i</td>
     <td>
       <div markdown="1">
         Ratio <span class="arithmatex">\( (\text{Debye length}/\rho_{\mathrm{ref}})^2 \)</span> <span class="arithmatex">\( = \varepsilon_0 B_{\mathrm{ref}}^2 / (m_{\mathrm{ref}} n_{\mathrm{ref}}) \)</span>
       </div>
     </td>
    </tr>
    <tr>
      <td>beta</td>
      <td><div markdown="1">Local beta: <span class="arithmatex">\( \mu_0 n_{\mathrm{ref}} T_{\mathrm{ref}} / B_{\mathrm{ref}}^2 \)</span></div></td>
    </tr>
    <tr>
      <td rowspan="2" style="vertical-align: top;">ibprime</td>
      <td><div markdown="1">"1" — Enable grad-p (finite beta-prime) contribution on magnetic drift *kvd* for equib_type="eqdsk" and "vmec"</div></td>
    </tr>
    <tr>
      <td><div markdown="1">"0" — Ignore it</div></td>
    </tr>
    <tr>
      <td>vmax</td>
      <td><div markdown="1">Velocity domain size in units of each thermal speed <span class="arithmatex">\( [v_{\mathrm{ts}}] \)</span></div></td>
    </tr>
    <tr>
      <td>nx0</td>
      <td><div markdown="1">Radial mode number for initial perturbation. *If nx0 > nx, it is reset to nx.*</div></td>
    </tr>

    <!-- &nperi -->
    <tr>
      <td rowspan="4" style="vertical-align: top;">&amp;nperi</td>
      <td>n_tht</td>
      <td><div markdown="1">Length of fluxtube, z-domain = <span class="arithmatex">\( \pm\,N_{\mathrm{tht}}\pi \)</span></div></td>
    </tr>
    <tr>
      <td>kymin</td>
      <td><div markdown="1">Minimum field-line-label (poloidal) wave number <span class="arithmatex">\( [1/\rho_{\mathrm{ref}}] \)</span></div></td>
    </tr>
    <tr>
      <td>m_j</td>
      <td><div markdown="1">Mode connection number for pseudo-periodic boundary; <span class="arithmatex">\( k_{x,\min} = |2\pi s_{\hat{}}\, kymin / m_j| \)</span></div></td>
    </tr>
    <tr>
      <td>del_c</td>
      <td><div markdown="1">Mode connection phase in fluxtube model (standard: del_c = 0.d0)</div></td>
    </tr>

    <!-- &confp -->
    <tr>
      <td rowspan="7" style="vertical-align: top;">&amp;confp</td>
      <td>eps_r</td>
      <td><div markdown="1">Inverse aspect ratio at center of fluxtube, <span class="arithmatex">\( a\,\rho_0/L_{\mathrm{ref}} \)</span></div></td>
    </tr>
    <tr>
      <td>eps_rnew</td>
      <td><div markdown="1">Model factor for equib_type="analytic"</div></td>
    </tr>
    <tr>
      <td>q_0</td>
      <td><div markdown="1">Safety factor at center of fluxtube, <span class="arithmatex">\( q(\rho_0) \)</span></div></td>
    </tr>
    <tr>
      <td>s_hat</td>
      <td><div markdown="1">Magnetic shear at center of fluxtube, <span class="arithmatex">\( s(\rho_0) \)</span></div></td>
    </tr>
    <tr>
      <td>lprd</td>
      <td rowspan="3" style="vertical-align: middle;">
        <div markdown="1">Model factor for equib_type="analytic"</div>
      </td>
    </tr>
    <tr>
      <td>⋮</td>
    </tr>
    <tr>
      <td>malpha</td>
    </tr>
     <!-- &vmecp -->
    <tr>
      <td rowspan="4" style="vertical-align: top;">&amp;vmecp</td>
      <td>s_input</td>
      <td><div markdown="1"> <span style="color: red"> Reference radial flux surface <span class="arithmatex">\( \rho_0 \)</span> in Stellarator (VMEC) equilibrium? </span></div></td>
    </tr>
    <tr>
      <td>nss</td>
      <td><div markdown="1"> <span style="color: red"> Number of radial grids on METRIC data? </span></div></td>
    </tr>
    <tr>
      <td>ntheta</td>
      <td><div markdown="1"> <span style="color: red">ntheta = (number of poloidal grids on METRIC) + 1 = 2*global_nz + 1?</span></div></td>
    </tr>
    <tr>
      <td>nzeta</td>
      <td><div markdown="1"> <span style="color: red"> Number of toroidal grids on METRIC data? </span></div></td>
    </tr>

    <!-- &bozxf -->
    <tr>
      <td style="vertical-align: top;">&amp;bozxf</td>
      <td>f_bozx</td>
      <td><div markdown="1">File location of METRIC data produced by BZX code</div></td>
    </tr>

    <!-- &igsp -->
    <tr>
      <td rowspan="8" style="vertical-align: top;">&amp;igsp</td>
      <td>s_input</td>
      <td><div markdown="1">Reference radial flux surface <span class="arithmatex">\( \rho_0 \)</span> in Tokamak (MEUDAS/TOPICS or G-EQDSK) equilibrium</div></td>
    </tr>
    <tr>
      <td rowspan="3" style="vertical-align: top;">mc_type</td>
      <td><div markdown="1">"0" — Axisymmetric coordinates</div></td>
    </tr>
    <tr>
      <td><div markdown="1">"1" — Boozer coordinates</div></td>
    </tr>
    <tr>
      <td><div markdown="1">"2" — Hamada coordinates</div></td>
    </tr>
    <tr>
      <td rowspan="2" style="vertical-align: top;">q_type</td>
      <td><div markdown="1">"1" — Use consistent q-value on g-eqdsk equilibrium (**Recommended**)</div></td>
    </tr>
    <tr>
      <td><div markdown="1">"0" — Use inconsistent but given q_0 value in &amp;confp</div></td>
    </tr>
    <tr>
      <td>nss</td>
      <td><div markdown="1">Number of radial grids on METRIC data</div></td>
    </tr>
    <tr>
      <td>ntheta</td>
      <td><div markdown="1">ntheta = (number of poloidal grids on METRIC) + 1 = 2*global_nz + 1</div></td>
    </tr>

    <!-- &igsf -->
    <tr>
      <td style="vertical-align: top;">&amp;igsf</td>
      <td>f_igs</td>
      <td><div markdown="1">File location of METRIC data produced by IGS code</div></td>
    </tr>

    <!-- &nu_ref -->
    <tr>
      <td rowspan="10" style="vertical-align: top;">&amp;nu_ref</td>
      <td>Nref</td>
      <td><div markdown="1">Local electron density at center of fluxtube, <span class="arithmatex">\( n_{\mathrm{e}}(\rho_0) \)</span> <span class="arithmatex">\( [\mathrm{m}^{-3}] \)</span></div></td>
    </tr>
    <tr>
      <td>Lref</td>
      <td><div markdown="1">Major radius at magnetic axis, <span class="arithmatex">\( R_a \)</span> <span class="arithmatex">\( [\mathrm{m}] \)</span></div></td>
    </tr>
    <tr>
      <td>Tref</td>
      <td><div markdown="1">Main ion temperature at center of fluxtube, <span class="arithmatex">\( T_{\mathrm{i}}(\rho_0) \)</span> <span class="arithmatex">\( [\mathrm{keV}] \)</span></div></td>
    </tr>
    <tr>
      <td rowspan="3" style="vertical-align: top;">col_type</td>
      <td><div markdown="1">"LB" — Lenard–Bernstein model collision operator</div></td>
    </tr>
    <tr>
      <td><div markdown="1">"lorentz" — Lorentz model collision operator</div></td>
    </tr>
    <tr>
      <td><div markdown="1">"full" — Sugama model collision operator for multiple plasma species</div></td>
    </tr>
    <tr>
      <td rowspan="2" style="vertical-align: top;">iFLR</td>
      <td><div markdown="1">"1" — Enable FLR (gyrophase-averaging &amp; classical diffusion) terms (LB &amp; full)</div></td>
    </tr>
    <tr>
      <td><div markdown="1">"0" — Disable it (DK-limit)</div></td>
    </tr>
    <tr>
      <td rowspan="2" style="vertical-align: top;">icheck</td>
      <td><div markdown="1">"0" — For production runs</div></td>
    </tr>
    <tr>
      <td><div markdown="1">"1" — Debug test with Maxwellian Annihilation (use with iFLR = 0)</div></td>
    </tr>
  </tbody>
</table>

Note that `inum=%%%` and `f_**="%%DIR%%/..."` will be automatically set
by the `shoot` script. In the `&physp` group, species-dependent names
`R0_Ln – dns1` are the array of length `nprocs`. The `&vmecp` and
`&bozxf` groups are active only when `equib_type = "vmec"`. Similarly,
the `&igsp` and `&igsf` groups are active only when
`equib_type = "eqdsk"`.
