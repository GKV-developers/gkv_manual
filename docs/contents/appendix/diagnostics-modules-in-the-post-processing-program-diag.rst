..  _sec_diagnostics-modules-in-the-post-processing-program-diag:

Diagnostics modules in the post-processing program diag
============================================================

Some diagnostics modules are explained below.

**List of subroutines in diagnostics modules**

.. list-table:: phiinxy(giz, loop)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - Contained in
     - ``out_mominxy`` module
   * - Arguments
     -
       + integer, intent(in) :: giz, loop
   * - Output
     - post/data/phiinxy_z(giz in 4 digits)_t(loop in 8 digits).dat
   * - Description
     - Write 2D electrostatic potential :math:`\tilde{\phi}(x,y)` for :math:`z=z(giz)` at output record :math:`loop` (:math:`time \simeq dtout\_ptn * loop`).

.. list-table:: Alinxy(giz, loop)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - Contained in
     - ``out_mominxy`` module
   * - Arguments
     -
       + integer, intent(in) :: giz, loop
   * - Output
     - post/data/Alinxy_z(giz in 4 digits)_t(loop in 8 digits).dat
   * - Description
     - Write 2D vector potential :math:`\tilde{A}_\parallel(x,y)` for :math:`z=z(giz)` at output record :math:`loop` (:math:`time \simeq dtout\_ptn * loop`).

.. list-table:: mominxy(giz, is, loop)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - Contained in
     - ``out_mominxy`` module
   * - Arguments
     -
       + integer, intent(in) :: giz, is, loop
   * - Output
     - post/data/mominxy_z(giz in 4 digits)s(is in 1 digit)_t(loop in 8 digits).dat
   * - Description
     - Write 2D fluid moments :math:`\tilde{n}_{\mathrm{s}}(x,y)`, :math:`\tilde{u}_{\parallel\mathrm{s}}(x,y)`, :math:`\tilde{p}_{\parallel\mathrm{s}}(x,y)`, :math:`\tilde{p}_{\perp\mathrm{s}}(x,y)`, :math:`\tilde{q}_{\parallel\parallel\mathrm{s}}(x,y)`, :math:`\tilde{q}_{\parallel\perp\mathrm{s}}(x,y)` of the plasma species :math:`is` for :math:`z=z(giz)` at output record :math:`loop` (:math:`time \simeq dtout\_ptn * loop`).

.. list-table:: phiinz(mx, gmy, loop)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - Contained in
     - ``out_mominz`` module
   * - Arguments
     -
       + integer, intent(in) :: mx, gmy, loop
   * - Output
     - post/data/phiinz_mx(mx in 4 digits)my(gmy in 4 digits)_t(loop in 8 digits).dat
   * - Description
     - Write electrostatic potential along a field line :math:`\tilde{\phi}_{\bm{k}}(z)` for the given mode :math:`(kx(mx), ky(gmy))` at output record :math:`loop` (:math:`time \simeq dtout\_ptn * loop`).

.. list-table:: Alinz(mx, gmy, loop)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - Contained in
     - ``out_mominz`` module
   * - Arguments
     -
       + integer, intent(in) :: mx, gmy, loop
   * - Output
     - post/data/Alinz_mx(mx in 4 digits)my(gmy in 4 digits)_t(loop in 8 digits).dat
   * - Description
     - Write vector potential along a field line :math:`\tilde{A}_{\parallel\bm{k}}(z)` for the given mode :math:`(kx(mx), ky(gmy))` at output record :math:`loop` (:math:`time \simeq dtout\_ptn * loop`).

.. list-table:: mominz(mx, gmy, is, loop)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - Contained in
     - ``out_mominz`` module
   * - Arguments
     -
       + integer, intent(in) :: mx, gmy, is, loop
   * - Output
     - post/data/mominz_mx(mx in 4 digits)my(gmy in 4 digits)s(is in 1 digit)_t(loop in 8 digits).dat
   * - Description
     - Write fluid moments along a field line  :math:`\tilde{n}_{\mathrm{s}\bm{k}}(z)`, :math:`\tilde{u}_{\parallel\mathrm{s}\bm{k}}(z)`, :math:`\tilde{p}_{\parallel\mathrm{s}\bm{k}}(z)`, :math:`\tilde{p}_{\perp\mathrm{s}\bm{k}}(z)`, :math:`\tilde{q}_{\parallel\parallel\mathrm{s}\bm{k}}(z)`, :math:`\tilde{q}_{\parallel\perp\mathrm{s}\bm{k}}(z)` of the plasma species :math:`is` for the given mode :math:`(kx(mx), ky(gmy))` at output record :math:`loop` (:math:`time \simeq dtout\_ptn * loop`).

.. list-table:: phiinz_connect(mx, gmy, loop)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - Contained in
     - ``out_mominz`` module
   * - Arguments
     -
       + integer, intent(in) :: mx, gmy, loop
   * - Output
     - post/data/phiinz_connect_mx(mx in 4 digits)my(gmy in 4 digits)_t(loop in 8 digits).dat
   * - Description
     - Write electrostatic potential along a field line :math:`\tilde{\phi}_{\bm{k}}(z)` for the given mode :math:`(kx(mx), ky(gmy))` at output record :math:`loop` (:math:`time \simeq dtout\_ptn * loop`). With considering the pseudo-periodic boundary condition in the fluxtube model, the mode structure is extended in the field-aligned coordinate by connecting :math:`k_x \pm \delta k_x` modes.

.. list-table:: phiinkxky(loop)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - Contained in
     - ``out_mominkxky`` module
   * - Arguments
     -
       + integer, intent(in) :: loop
   * - Output
     - post/data/phiinkxky_t(loop in 8 digits).dat
   * - Description
     - Write :math:`(k_x,k_y)` spectrum of electrostatic potential :math:`\langle |\tilde{\phi}_{\bm{k}}|^2 \rangle/2` at output record :math:`loop` (:math:`time \simeq dtout\_ptn * loop`).

.. list-table:: Alinkxky(loop)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - Contained in
     - ``out_mominkxky`` module
   * - Arguments
     -
       + integer, intent(in) :: loop
   * - Output
     - post/data/Alinkxky_t(loop in 8 digits).dat
   * - Description
     - Write :math:`(k_x,k_y)` spectrum of vector potential :math:`\langle |\tilde{A}_{\parallel\bm{k}}|^2 \rangle/2` at output record :math:`loop` (:math:`time \simeq dtout\_ptn * loop`).

.. list-table:: mominkxky(is, loop)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - Contained in
     - ``out_mominkxky`` module
   * - Arguments
     -
       + integer, intent(in) :: is, loop
   * - Output
     - post/data/mominkxky_s(is in 1 digit)_t(loop in 8 digits).dat
   * - Description
     - Write :math:`(k_x,k_y)` spectra of fluid moments :math:`\langle |\tilde{n}_{\mathrm{s}\bm{k}}|^2 \rangle/2`, :math:`\langle |\tilde{u}_{\parallel\mathrm{s}\bm{k}}|^2 \rangle/2`, :math:`\langle |\tilde{p}_{\parallel\mathrm{s}\bm{k}}|^2 \rangle/2`, :math:`\langle |\tilde{p}_{\perp\mathrm{s}\bm{k}}|^2 \rangle/2`, :math:`\langle |\tilde{q}_{\parallel\parallel\mathrm{s}\bm{k}}|^2 \rangle/2`, :math:`\langle |\tilde{q}_{\parallel\perp\mathrm{s}\bm{k}}|^2 \rangle/2` of the plasma species :math:`is` at output record :math:`loop` (:math:`time \simeq dtout\_ptn * loop`).

.. list-table:: trninkxky(is, loop)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - Contained in
     - ``out_trninkxky`` module
   * - Arguments
     -
       + integer, intent(in) :: is, loop
   * - Output
     - post/data/trninkxky_s(is in 1 digit)_t(loop in 8 digits).dat
   * - Description
     - Write :math:`(k_x,k_y)` spectra of variables in entropy balance relation of the plasma species :math:`is` at output record :math:`loop` (:math:`time \simeq dtout\_eng * loop`).

.. list-table:: triinkxky(mxt, myt, is, loop)
   :widths: 6 40
   :header-rows: 1

   * - Field
     - Description
   * - Contained in
     - ``out_triinkxky`` module
   * - Arguments
     -
       + integer, intent(in) :: mxt, myt, is, loop
   * - Output
     - post/data/trninkxky_s(is in 1 digit)_t(loop in 8 digits).dat
   * - Description
     - Write :math:`(p_x,p_y)` spectra of triad transfer functions :math:`J_{\mathrm{sE}\bm{k}}^{\bm{p,q}}`, :math:`J_{\mathrm{sE}\bm{p}}^{\bm{q,k}}`, :math:`J_{\mathrm{sE}\bm{q}}^{\bm{k,p}}`, :math:`J_{\mathrm{sM}\bm{k}}^{\bm{p,q}}`, :math:`J_{\mathrm{sM}\bm{p}}^{\bm{q,k}}`, :math:`J_{\mathrm{sM}\bm{q}}^{\bm{k,p}}` of the plasma species :math:`is` for the mode :math:`(k_x(mxt),k_y(myt))` at output record :math:`loop` (:math:`time \simeq dtout\_ptn * loop`).
