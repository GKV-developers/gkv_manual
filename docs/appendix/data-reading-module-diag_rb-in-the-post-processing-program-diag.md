# Data-reading module diag_rb in the post-processing program diag {#sec:data-reading-module-diag_rb-in-the-post-processing-program-diag}

![Output record number in the post-processing program
`diag`](./output_record.png){#fig:output_record_number style="display:block; margin: 0 auto;" width="360"}

To read GKV binary output in the post-processing program `diag`, use the
data-reading module `diag_rb`.

<figure class="code-figure" markdown>
  <figcaption>An example to use diag_rb</figcaption>

```fortran
use diag_rb, only : rb_phi_loop
complex(kind=DP) :: phi(-nx:nx, 0:global_ny, -global_nz:global_nz-1)
integer :: loop = 100
call rb_phi_loop(loop, phi) ! Read potential phi at output record loop=100 (time=dtout_ptn*loop)
```

</figure>

The output record number `loop` is counted up from the first run
(`inum`=1) by evaluating file size of GKV binary output. As shown in
Fig. [1.1](#fig:output_record_number){reference-type="ref"
reference="fig:output_record_number"}, output record number for the
binary output `$DIR/phi/*phi*` is from `loop_phi_sta`(001) = 0 to
`loop_phi_end(enum)` = `nloop_phi`. Therefore, even if you analyze only
run numbers from `snum`$>1$ to `enum`, all GKV binary output data from
`inum`=1 should be left in the diagnosed directory.

Taking a look at the source code of `diag_rb`, one finds various types
of subroutines which read electrostatic potential
$\tilde{\phi}_{\bm{k}}$ in $(k_x,k_y,z)$ or in $(k_x,k_y)$ at a given
$z$ or in $(z)$ for a given mode $k_x, k_y$, etc., and similarly read
magnetic vector potential $\tilde{A}_{\parallel\bm{k}}$, fluid moments,
and so on. Some typical subroutines are listed below.
One may find more efficient subroutine in the source code of `diag_rb`.


**List of subroutines in the data-reading module `diag_rb`**

rb_phi_gettime(loop, time)
{.api-signature}

| Field               | Description |
|:------------------|:------|
| Arguments         | <ul><li><code>integer, intent(in) :: loop</code></li><li><code>real(kind=DP), intent(out) :: time</code></li></ul> |
| GKV binary output | <code>phi/gkvp_f0.48_(rankg in 6 digits).0.phi.(inum in 3 digits)</code> |
| Description       | Read simulation time <code>time</code> corresponding to the output record <code>loop</code>. <span class="api-vars"><span class="arithmatex">\( ( \text{time} \simeq \text{dtout_ptn} \times \text{loop} ) \)</span></span> |

rb_Al_gettime(loop, time)
{.api-signature}

| Field               | Description |
|:------------------|:------|
| Arguments         | <ul><li><code>integer, intent(in) :: loop</code></li><li><code>real(kind=DP), intent(out) :: time</code></li></ul> |
| GKV binary output | <code>phi/gkvp_f0.48_(rankg in 6 digits).0.Al.(inum in 3 digits)</code> |
| Description       | Read simulation time <code>time</code> corresponding to the output record <code>loop</code>. <span class="api-vars"><span class="arithmatex">\( ( \text{time} \simeq \text{dtout_ptn} \times \text{loop} ) \)</span></span> |

rb_mom_gettime(loop, time)
{.api-signature}

| Field               | Description |
|:------------------|:------|
| Arguments         | <ul><li><code>integer, intent(in) :: loop</code></li><li><code>real(kind=DP), intent(out) :: time</code></li></ul> |
| GKV binary output | <code>phi/gkvp_f0.48_(rankg in 6 digits).(ranks in 1 digit).mom.(inum in 3 digits)</code> |
| Description       | Read simulation time <code>time</code> corresponding to the output record <code>loop</code>. <span class="api-vars"><span class="arithmatex">\( ( \text{time} \simeq \text{dtout_ptn} \times \text{loop} ) \)</span></span> |

rb_trn_gettime(loop, time)
{.api-signature}

| Field               | Description |
|:------------------|:------|
| Arguments         | <ul><li><code>integer, intent(in) :: loop</code></li><li><code>real(kind=DP), intent(out) :: time</code></li></ul> |
| GKV binary output | <code>phi/gkvp_f0.48_(rankg in 6 digits).(ranks in 1 digit).trn.(inum in 3 digits)</code> |
| Description       | Read simulation time <code>time</code> corresponding to the output record <code>loop</code>. <span class="api-vars"><span class="arithmatex">\( ( \text{time} \simeq \text{dtout_eng} \times \text{loop} ) \)</span></span> |

rb_phi_loop(loop, phi)
{.api-signature}

| Field               | Description |
|:------------------|:------|
| Arguments         | <ul><li><code>integer, intent(in) :: loop</code></li><li><code>complex(kind=DP), intent(out) :: phi(-nx:nx,0:global_ny,-global_nz:global_nz-1)</code></li></ul> |
| GKV binary output | <code>phi/gkvp_f0.48_(rankg in 6 digits).0.phi.(inum in 3 digits)</code> |
| Description       | Read electrostatic potential <code>phi</code> corresponding to the output record <code>loop</code>. <span class="api-vars"><span class="arithmatex">\( ( \text{time} \simeq \text{dtout_ptn} \times \text{loop} ) \)</span></span> |

rb_Al_loop(loop, Al)
{.api-signature}

| Field               | Description |
|:------------------|:------|
| Arguments         | <ul><li><code>integer, intent(in) :: loop</code></li><li><code>complex(kind=DP), intent(out) :: Al(-nx:nx,0:global_ny,-global_nz:global_nz-1)</code></li></ul> |
| GKV binary output | <code>phi/gkvp_f0.48_(rankg in 6 digits).0.Al.(inum in 3 digits)</code> |
| Description       | Read vector potential <code>Al</code> corresponding to the output record <code>loop</code>. <span class="api-vars"><span class="arithmatex">\( ( \text{time} \simeq \text{dtout_ptn} \times \text{loop} ) \)</span></span> |

rb_mom_imomisloop(imom, is, loop, mom)
{.api-signature}

| Field               | Description |
|:------------------|:------|
| Arguments         | <ul><li><code>integer, intent(in) :: imom, is, loop</code></li><li><code>complex(kind=DP), intent(out) :: mom(-nx:nx,0:global_ny,-global_nz:global_nz-1)</code></li></ul> |
| GKV binary output | <code>phi/gkvp_f0.48_(rankg in 6 digits).(ranks in 1 digit).mom.(inum in 3 digits)</code> |
| Description       | Read a fluid moment <code>mom</code> corresponding to the output record <code>loop</code> <span class="api-vars">(<span class="arithmatex">\( \text{time} \simeq \text{dtout_ptn} \times \text{loop} \)</span>)</span>, where <span class="api-vars"><code>is</code> specifies the plasma species, and <code>imom = 0-5</code> correspond to <span class="arithmatex">\( \tilde{n}_{\mathrm{s}\mathbf{k}},\ \tilde{u}_{\parallel\mathrm{s}\mathbf{k}},\ \tilde{p}_{\parallel\mathrm{s}\mathbf{k}},\ \tilde{p}_{\perp\mathrm{s}\mathbf{k}},\ \tilde{q}_{\parallel\parallel\mathrm{s}\mathbf{k}},\ \tilde{q}_{\parallel\perp\mathrm{s}\mathbf{k}} \)</span>.</span> |

rb_trn_itrnisloop(itrn, is, loop, trn)
{.api-signature}

| Field               | Description |
|:------------------|:------|
| Arguments         | <ul><li><code>integer, intent(in) :: itrn, is, loop</code></li><li><code>real(kind=DP), intent(out) :: trn(-nx:nx,0:global_ny)</code></li></ul> |
| GKV binary output | <code>phi/gkvp_f0.48_(rankg in 6 digits).(ranks in 1 digit).trn.(inum in 3 digits)</code> |
| Description       | Read a variable corresponding to the entropy balance <code>trn</code> at the output record <code>loop</code> <span class="api-vars">(<span class="arithmatex">\( \text{time} \simeq \text{dtout_eng} \times \text{loop} \)</span>)</span>, where <span class="api-vars"><code>is</code> specifies the plasma species, and <code>itrn = 0-11</code> correspond to perturbed gyrocenter entropy, electrostatic field energy including polarization, magnetic field energy, wave-particle interaction via electrostatic fluctuations, wave-particle interaction via magnetic fluctuations, nonlinear entropy transfers via <span class="arithmatex">\( \mathbf{E}\times\mathbf{B} \)</span> flows, nonlinear entropy transfer via magnetic flutters, collisional dissipation, particle flux by <span class="arithmatex">\( \mathbf{E}\times\mathbf{B} \)</span> flows, particle flux by magnetic flutters, energy flux by <span class="arithmatex">\( \mathbf{E}\times\mathbf{B} \)</span> flows, energy flux by magnetic flutters.</span> |
