# Diagnostics modules in the post-processing program diag {#sec:diagnostics-modules-in-the-post-processing-program-diag}

Some diagnostics modules are explained below.

** List of subroutines in diagnostics modules **

phiinxy(giz, loop)
{.api-signature}

| Field         | Description |
|:------------|:------|
| Contained in| <code>out_mominxy</code> module |
| Arguments   | <ul><li><code>integer, intent(in) :: giz, loop</code></li></ul> |
| Output      | <code>post/data/phiinxy_z(giz in 4 digits)_t(loop in 8 digits).dat</code> |
| Description | Write 2D electrostatic potential <span class="arithmatex">\( \tilde{\phi}(x,y) \)</span> for <span class="arithmatex">\( z = z(\texttt{giz}) \)</span> at output record <code>loop</code> <span class="arithmatex">\( ( \text{time} \simeq \text{dtout_ptn} \times \text{loop} ) \)</span>. |

Alinxy(giz, loop)
{.api-signature}

| Field         | Description |
|:------------|:------|
| Contained in| <code>out_mominxy</code> module |
| Arguments   | <ul><li><code>integer, intent(in) :: giz, loop</code></li></ul> |
| Output      | <code>post/data/Alinxy_z(giz in 4 digits)_t(loop in 8 digits).dat</code> |
| Description | Write 2D vector potential <span class="arithmatex">\( \tilde{A}_\parallel(x,y) \)</span> for <span class="arithmatex">\( z = z(\texttt{giz}) \)</span> at output record <code>loop</code> <span class="arithmatex">\( ( \text{time} \simeq \text{dtout_ptn} \times \text{loop} ) \)</span>. |

mominxy(giz, is, loop)
{.api-signature}

| Field         | Description |
|:------------|:------|
| Contained in| <code>out_mominxy</code> module |
| Arguments   | <ul><li><code>integer, intent(in) :: giz, is, loop</code></li></ul> |
| Output      | <code>post/data/mominxy_z(giz in 4 digits)s(is in 1 digit)_t(loop in 8 digits).dat</code> |
| Description | Write 2D fluid moments <span class="arithmatex">\( \tilde{n}_{\mathrm{s}}(x,y),\ \tilde{u}_{\parallel\mathrm{s}}(x,y),\ \)</span> <span class="arithmatex">\( \tilde{p}_{\parallel\mathrm{s}}(x,y),\ \tilde{p}_{\perp\mathrm{s}}(x,y), \)</span> <span class="arithmatex">\( \tilde{q}_{\parallel\parallel\mathrm{s}}(x,y),\ \tilde{q}_{\parallel\perp\mathrm{s}}(x,y)\ \)</span>  of the plasma species <code>is</code> for <span class="arithmatex">\( z = z(\texttt{giz}) \)</span> at output record <code>loop</code>  <span class="arithmatex">\( ( \text{time} \simeq \text{dtout_ptn} \times \text{loop} ) \)</span>. |

phiinz(mx, gmy, loop)
{.api-signature}

| Field         | Description |
|:------------|:------|
| Contained in| <code>out_mominz</code> module |
| Arguments   | <ul><li><code>integer, intent(in) :: mx, gmy, loop</code></li></ul> |
| Output      | <code>post/data/phiinz_mx(mx in 4 digits)my(gmy in 4 digits)_t(loop in 8 digits).dat</code> |
| Description | Write electrostatic potential along a field line <span class="arithmatex">\( \tilde{\phi}_{\mathbf{k}}(z) \)</span> for mode <span class="arithmatex">\( (k_x(\texttt{mx}),\,k_y(\texttt{gmy})) \)</span> at output record <code>loop</code> <span class="arithmatex">\( ( \text{time} \simeq \text{dtout_ptn} \times \text{loop} ) \)</span>. |

Alinz(mx, gmy, loop)
{.api-signature}

| Field         | Description |
|:------------|:------|
| Contained in| <code>out_mominz</code> module |
| Arguments   | <ul><li><code>integer, intent(in) :: mx, gmy, loop</code></li></ul> |
| Output      | <code>post/data/Alinz_mx(mx in 4 digits)my(gmy in 4 digits)_t(loop in 8 digits).dat</code> |
| Description | Write vector potential along a field line <span class="arithmatex">\( \tilde{A}_{\parallel\mathbf{k}}(z) \)</span> for mode <span class="arithmatex">\( (k_x(\texttt{mx}),\,k_y(\texttt{gmy})) \)</span> at output record <code>loop</code> <span class="arithmatex">\( ( \text{time} \simeq \text{dtout_ptn} \times \text{loop} ) \)</span>. |

mominz(mx, gmy, is, loop)
{.api-signature}

| Field         | Description |
|:------------|:------|
| Contained in| <code>out_mominz</code> module |
| Arguments   | <ul><li><code>integer, intent(in) :: mx, gmy, is, loop</code></li></ul> |
| Output      | <code>post/data/mominz_mx(mx in 4 digits)my(gmy in 4 digits)s(is in 1 digit)_t(loop in 8 digits).dat</code> |
| Description | Write fluid moments along a field line for species <code>is</code> at output record <code>loop</code>: <span class="arithmatex">\( \tilde{n}_{\mathrm{s}\mathbf{k}}(z),\ \tilde{u}_{\parallel\mathrm{s}\mathbf{k}}(z), \)</span> <span class="arithmatex">\( \tilde{p}_{\parallel\mathrm{s}\mathbf{k}}(z),\ \tilde{p}_{\perp\mathrm{s}\mathbf{k}}(z), \)</span> <span class="arithmatex">\( \tilde{q}_{\parallel\parallel\mathrm{s}\mathbf{k}}(z),\ \tilde{q}_{\parallel\perp\mathrm{s}\mathbf{k}}(z) \)</span> for mode <span class="arithmatex">\( (k_x(\texttt{mx}),\,k_y(\texttt{gmy})) \)</span> <span class="arithmatex">\( ( \text{time} \simeq \text{dtout_ptn} \times \text{loop} ) \)</span>. |

phiinz_connect(mx, gmy, loop)
{.api-signature}

| Field         | Description |
|:------------|:------|
| Contained in| <code>out_mominz</code> module |
| Arguments   | <ul><li><code>integer, intent(in) :: mx, gmy, loop</code></li></ul> |
| Output      | <code>post/data/phiinz_connect_mx(mx in 4 digits)my(gmy in 4 digits)_t(loop in 8 digits).dat</code> |
| Description | Write electrostatic potential along a field line <span class="arithmatex">\( \tilde{\phi}_{\mathbf{k}}(z) \)</span> for mode <span class="arithmatex">\( (k_x(\texttt{mx}),\,k_y(\texttt{gmy})) \)</span> at output record <code>loop</code>. Considering the pseudo-periodic boundary in the fluxtube model, extend the mode structure by connecting <span class="arithmatex">\( k_x \pm \delta k_x \)</span> modes in the field-aligned coordinate <span class="arithmatex">\( ( \text{time} \simeq \text{dtout_ptn} \times \text{loop} ) \)</span>. |

phiinkxky(loop)
{.api-signature}

| Field         | Description |
|:------------|:------|
| Contained in| <code>out_mominkxky</code> module |
| Arguments   | <ul><li><code>integer, intent(in) :: loop</code></li></ul> |
| Output      | <code>post/data/phiinkxky_t(loop in 8 digits).dat</code> |
| Description | Write <span class="arithmatex">\( (k_x,k_y) \)</span> spectrum of electrostatic potential <span class="arithmatex">\( \langle \lvert\tilde{\phi}_{\mathbf{k}}\rvert^2 \rangle / 2 \)</span> at output record <code>loop</code> <span class="arithmatex">\( ( \text{time} \simeq \text{dtout_ptn} \times \text{loop} ) \)</span>. |

Alinkxky(loop)
{.api-signature}

| Field         | Description |
|:------------|:------|
| Contained in| <code>out_mominkxky</code> module |
| Arguments   | <ul><li><code>integer, intent(in) :: loop</code></li></ul> |
| Output      | <code>post/data/Alinkxky_t(loop in 8 digits).dat</code> |
| Description | Write <span class="arithmatex">\( (k_x,k_y) \)</span> spectrum of vector potential <span class="arithmatex">\( \langle \lvert\tilde{A}_{\parallel\mathbf{k}}\rvert^2 \rangle / 2 \)</span> at output record <code>loop</code> <span class="arithmatex">\( ( \text{time} \simeq \text{dtout_ptn} \times \text{loop} ) \)</span>. |

mominkxky(is, loop)
{.api-signature}

| Field         | Description |
|:------------|:------|
| Contained in| <code>out_mominkxky</code> module |
| Arguments   | <ul><li><code>integer, intent(in) :: is, loop</code></li></ul> |
| Output      | <code>post/data/mominkxky_s(is in 1 digit)_t(loop in 8 digits).dat</code> |
| Description | Write <span class="arithmatex">\( (k_x,k_y) \)</span> spectra of fluid moments of species <code>is</code> at output record <code>loop</code>: <span class="arithmatex">\( \langle \lvert\tilde{n}_{\mathrm{s}\mathbf{k}}\rvert^2 \rangle/2,\ \)</span> <span class="arithmatex">\( \langle \lvert\tilde{u}_{\parallel\mathrm{s}\mathbf{k}}\rvert^2 \rangle/2,\ \)</span> <span class="arithmatex">\( \langle \lvert\tilde{p}_{\parallel\mathrm{s}\mathbf{k}}\rvert^2 \rangle/2,\ \)</span> <span class="arithmatex">\( \langle \lvert\tilde{p}_{\perp\mathrm{s}\mathbf{k}}\rvert^2 \rangle/2,\ \)</span> <span class="arithmatex">\( \langle \lvert\tilde{q}_{\parallel\parallel\mathrm{s}\mathbf{k}}\rvert^2 \rangle/2,\ \)</span> <span class="arithmatex">\( \langle \lvert\tilde{q}_{\parallel\perp\mathrm{s}\mathbf{k}}\rvert^2 \rangle/2 \)</span> <span class="arithmatex">\( ( \text{time} \simeq \text{dtout_ptn} \times \text{loop} ) \)</span>. |

trninkxky(is, loop)
{.api-signature}

| Field         | Description |
|:------------|:------|
| Contained in| <code>out_trninkxky</code> module |
| Arguments   | <ul><li><code>integer, intent(in) :: is, loop</code></li></ul> |
| Output      | <code>post/data/trninkxky_s(is in 1 digit)_t(loop in 8 digits).dat</code> |
| Description | Write <span class="arithmatex">\( (k_x,k_y) \)</span> spectra of variables in the entropy-balance relation of species <code>is</code> at output record <code>loop</code> <span class="arithmatex">\( ( \text{time} \simeq \text{dtout_eng} \times \text{loop} ) \)</span>. |

triinkxky(mxt, myt, is, loop)
{.api-signature}

| Field         | Description |
|:------------|:------|
| Contained in| <code>out_triinkxky</code> module |
| Arguments   | <ul><li><code>integer, intent(in) :: mxt, myt, is, loop</code></li></ul> |
| Output      | <code>post/data/trninkxky_s(is in 1 digit)_t(loop in 8 digits).dat</code> |
| Description | Write <span class="arithmatex">\( (p_x,p_y) \)</span> spectra of triad transfer functions <span class="arithmatex">\( J_{\mathrm{sE}\mathbf{k}}^{\mathbf{p,q}},\ J_{\mathrm{sE}\mathbf{p}}^{\mathbf{q,k}},\ J_{\mathrm{sE}\mathbf{q}}^{\mathbf{k,p}},\ J_{\mathrm{sM}\mathbf{k}}^{\mathbf{p,q}},\ J_{\mathrm{sM}\mathbf{p}}^{\mathbf{q,k}},\ J_{\mathrm{sM}\mathbf{q}}^{\mathbf{k,p}} \)</span> of species <code>is</code> for mode <span class="arithmatex">\( (k_x(\texttt{mxt}), k_y(\texttt{myt})) \)</span> at output record <code>loop</code> <span class="arithmatex">\( ( \text{time} \simeq \text{dtout_ptn} \times \text{loop} ) \)</span>. |
