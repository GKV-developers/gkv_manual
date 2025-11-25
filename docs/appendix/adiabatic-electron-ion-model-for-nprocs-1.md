# Adiabatic electron/ion model for nprocs=1 {#sec:adiabatic-electron-ion-model-for-nprocs-1}

When one runs a single-species simulation with setting `nprocs`=1, GKV
employs adiabatic model for electrons or ions. In both case,
electrostatic limit is assumed ($\tilde{A}_\parallel = 0$), and
`lambda_i` and `beta` in `gkvp_f0.48_namelist` are neglected.
Setting of kinetic electrons with adiabatic ion model is `nprocs`=1 in
`src/gkvp_f0.48_header.f90`, and `Anum`=1.d0, `Znum`=1.d0, `fcs`=1.d0,
`sgn`=-1.d0 in `run/gkvp_f0.48_namelist`. Then the Poisson eq. with
adiabatic ion model is

\begin{align}
  \left[ \frac{e^2 n_\mathrm{0}}{T_\mathrm{i}} + \frac{e^2 n_\mathrm{0}}{T_\mathrm{e}} \left( 1 - \Gamma_{0\mathrm{e}\bm{k}} \right) \right] \tilde{\phi}_{\bm{k}} = - e \int dv^3 J_{0\mathrm{e}\bm{k}} \tilde{f}_{\mathrm{e}\bm{k}}.\end{align}

Density, temperature and mass are normalized electrons' value. Then the
normalized Poisson eq. is

\begin{align}
  \left[ \frac{T_\mathrm{e}}{T_\mathrm{i}} + 1 - \bar{\Gamma}_{0\mathrm{e}\bm{k}} \right] \bar{\phi}_{\bm{k}} = - \int d\bar{v}^3 \bar{J}_{0\mathrm{e}\bm{k}} \bar{f}_{\mathrm{e}\bm{k}}.\end{align}

The temperature ratio $T_\mathrm{e}/T_\mathrm{i}$ is given by `tau_ad`
in `run/gkvp_f0.48_namelist`.
Setting of kinetic ions with adiabatic electron model is `nprocs`=1 in
`src/gkvp_f0.48_header.f90`, and `Anum`=1.d0, `Znum`=1.d0, `fcs`=1.d0,
`sgn`=1.d0 in `run/gkvp_f0.48_namelist`. Then the Poisson eq. with
adiabatic electron model is

\begin{align}
  \frac{e^2 n_\mathrm{0}}{T_\mathrm{i}} \left( 1 - \Gamma_{0\mathrm{i}\bm{k}} \right) \tilde{\phi}_{\bm{k}} = - \frac{e^2n_\mathrm{0}}{T_\mathrm{e}} \left( \tilde{\phi}_{\bm{k}} - \langle \tilde{\phi}_{\bm{k}} \rangle \delta_{k_y,0} \right) + e \int dv^3 J_{0\mathrm{i}\bm{k}} \tilde{f}_{\mathrm{i}\bm{k}},\end{align}

where $\langle \cdots \rangle$ denotes the flux-surface average, and
$\delta_{i,j}$ is the Kronecker's delta. Density, temperature and mass
are normalized ions' value. Then the normalized Poisson eq. is

\begin{align}
  \left( 1 - \bar{\Gamma}_{0\mathrm{i}\bm{k}} \right) \bar{\phi}_{\bm{k}} + \frac{T_\mathrm{i}}{T_\mathrm{e}} \left( \bar{\phi}_{\bm{k}} - \langle \bar{\phi}_{\bm{k}} \rangle \delta_{k_y,0} \right) = \int dv^3 \bar{J}_{0\mathrm{i}\bm{k}} \bar{f}_{\mathrm{i}\bm{k}},\end{align}

The temperature ratio $T_\mathrm{i}/T_\mathrm{e}$ is given by `tau_ad`
in `run/gkvp_f0.48_namelist`.
