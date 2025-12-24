.. _supplemental:

Supplemental
====================

.. _sec_entropy-balance-equation-for-each-wavenumber-and-plasma-species:

Entropy balance equation for each wavenumber and plasma species
----------------------------------------------------------------------

.. math::

   \frac{dS_{\mathrm{s}\bm{k}}}{dt} &= \frac{T_\mathrm{s}\Gamma_{\mathrm{s}\bm{k}}}{L_{p\mathrm{s}}} + \frac{\Theta_{\mathrm{s}\bm{k}}}{L_{T\mathrm{s}}} + I_{\mathrm{s}\bm{k}} + R_{\mathrm{s}\bm{k}} + D_{\mathrm{s}\bm{k}} + E_{\mathrm{s}\bm{k}}, \\
   \frac{dW_{\mathrm{E}\bm{k}}}{dt} &= - \sum_\mathrm{s} R_{\mathrm{sE}\bm{k}}, \\
   \frac{dW_{\mathrm{M}\bm{k}}}{dt} &= - \sum_\mathrm{s} R_{\mathrm{sM}\bm{k}},

where

.. math::

   S_{\mathrm{s}\bm{k}} &= \left\langle \int dv^3 \frac{T_\mathrm{s}|\tilde{f}_{\mathrm{s}\bm{k}}|^2}{2F_\mathrm{sM}} \right\rangle, \\
   W_{\mathrm{E}\bm{k}} & = \left\langle \left[ \varepsilon_0 k_\perp^2 + \sum_\mathrm{s} \frac{e_\mathrm{s}^2 n_\mathrm{s}}{T_\mathrm{s}} \left( 1 - \Gamma_{0\mathrm{s}\bm{k}} \right) \right] \frac{|\tilde{\phi}_{\bm{k}}|^2}{2} \right\rangle, \\
   W_{\mathrm{M}\bm{k}} &= \left\langle \frac{k_\perp^2}{\mu_0} \frac{|\tilde{A}_{\parallel\bm{k}}|^2}{2} \right\rangle, \\
   \Gamma_{\mathrm{s}\bm{k}} &= \Gamma_{\mathrm{sE}\bm{k}} + \Gamma_{\mathrm{sM}\bm{k}} = \mathrm{Re}\left[ \left\langle - \frac{ik_y\tilde{\phi}_{\bm{k}}}{c_b}\tilde{n}_{\mathrm{s}\bm{k}}^* + \frac{ik_y\tilde{A}_{\parallel\bm{k}}}{c_b}\tilde{u}_{\parallel\mathrm{s}\bm{k}}^* \right\rangle \right], \\
   Q_{\mathrm{s}\bm{k}} &= Q_{\mathrm{sE}\bm{k}} + Q_{\mathrm{sM}\bm{k}} = \mathrm{Re}\left[ \left\langle - \frac{ik_y\tilde{\phi}_{\bm{k}}}{c_b}\tilde{p}_{\mathrm{s}\bm{k}}^* + \frac{ik_y\tilde{A}_{\parallel\bm{k}}}{c_b}\tilde{q}_{\parallel\mathrm{s}\bm{k}}^* \right\rangle \right], \\
   \Theta_{\mathrm{s}\bm{k}} &= Q_{\mathrm{s}\bm{k}} - \frac{5}{2} T_\mathrm{s} \Gamma_{\mathrm{s}\bm{k}}, \\
   I_{\mathrm{s}\bm{k}} &= \sum_{\bm{p}} \sum_{\bm{q}} J_{\mathrm{s}\bm{k}}^{\bm{p},\bm{q}}, \\
   R_{\mathrm{s}\bm{k}} &= R_{\mathrm{sE}\bm{k}} + R_{\mathrm{sM}\bm{k}} = \mathrm{Re} \left[ \left\langle - \tilde{\phi}_{\bm{k}}^* \frac{\partial e_\mathrm{s}\tilde{n}_{\mathrm{s}\bm{k}}}{\partial t} - e_\mathrm{s} \tilde{u}_{\mathrm{s}\bm{k}}^* \frac{\partial \tilde{A}_{\parallel\bm{k}}}{\partial t} \right\rangle \right], \\
   D_{\mathrm{s}\bm{k}} &= \mathrm{Re} \left[ \left\langle \int dv^2 \frac{T_\mathrm{s}\tilde{g}_{\mathrm{s}\bm{k}}^*}{F_\mathrm{sM}} C_{\mathrm{s}\bm{k}} \right\rangle \right], \\
   E_{\mathrm{s}\bm{k}} &= \mathrm{Re} \left[ - \left\langle \int dv^3 v_\parallel \nabla_\parallel \frac{T_\mathrm{s}|\tilde{g}_{\mathrm{s}\bm{k}}|^2}{2F_\mathrm{sM}} \right\rangle \right],

with

.. math::

   \tilde{g}_{\mathrm{s}\bm{k}} &= \tilde{f}_{\mathrm{s}\bm{k}} + \frac{e_\mathrm{s} J_{0\mathrm{s}\bm{k}} \tilde{\phi}_{\bm{k}}}{T_\mathrm{s}} F_\mathrm{sM}, \\
   \tilde{n}_{\mathrm{s}\bm{k}} &= \int dv^3 J_{0\mathrm{s}\bm{k}} \tilde{f}_{\mathrm{s}\bm{k}}, \\
   \tilde{u}_{\parallel\mathrm{s}\bm{k}} &= \int dv^3 v_\parallel J_{0\mathrm{s}\bm{k}} \tilde{f}_{\mathrm{s}\bm{k}}, \\
   \tilde{p}_{\parallel\mathrm{s}\bm{k}} &= \int dv^3 \frac{m_\mathrm{s}v_\parallel^2}{2} J_{0\mathrm{s}\bm{k}} \tilde{f}_{\mathrm{s}\bm{k}}, \\
   \tilde{p}_{\perp\mathrm{s}\bm{k}} &= \int dv^3 \mu B J_{0\mathrm{s}\bm{k}} \tilde{f}_{\mathrm{s}\bm{k}}, \\
   \tilde{q}_{\parallel\parallel\mathrm{s}\bm{k}} &= \int dv^3 v_\parallel \frac{m_\mathrm{s}v_\parallel^2}{2} J_{0\mathrm{s}\bm{k}} \tilde{f}_{\mathrm{s}\bm{k}}, \\
   \tilde{q}_{\parallel\perp\mathrm{s}\bm{k}} &= \int dv^3 v_\parallel \mu B J_{0\mathrm{s}\bm{k}} \tilde{f}_{\mathrm{s}\bm{k}}, \\
   \tilde{p}_{\mathrm{s}\bm{k}} &= \tilde{p}_{\parallel\mathrm{s}\bm{k}} + \tilde{p}_{\perp\mathrm{s}\bm{k}} , \\
   \tilde{q}_{\parallel\mathrm{s}\bm{k}} &= \tilde{q}_{\parallel\parallel\mathrm{s}\bm{k}} + \tilde{q}_{\parallel\perp\mathrm{s}\bm{k}}.

See also Refs.
:cite:p:`supplemental-Sugama2009PoP` and :cite:p:`supplemental-Maeyama2014PoP`.

..  _sec_triad-transfer-function:

Triad transfer function
------------------------------

.. math::

   J_{\mathrm{s}\bm{k}}^{\bm{p},\bm{q}} = \delta_{\bm{k}+\bm{p}+\bm{q},\bm{0}} \frac{\bm{b} \cdot \bm{p} \times \bm{q}}{2c_b} \mathrm{Re} \left[ \left\langle \int dv^3 (\chi_{\mathrm{s}\bm{p}} \tilde{g}_{\mathrm{s}\bm{q}} - \chi_{\mathrm{s}\bm{q}} \tilde{g}_{\mathrm{s}\bm{p}}) \frac{T_\mathrm{s}\tilde{g}_{\mathrm{s}\bm{k}}}{F_\mathrm{sM}} \right\rangle \right],

where
:math:`\tilde{g}_{\mathrm{s}\bm{k}} = \tilde{f}_{\mathrm{s}\bm{k}} + e_\mathrm{s} J_{0\mathrm{s}\bm{k}} \tilde{\phi}_{\bm{k}} F_\mathrm{sM} / T_\mathrm{s}`
and
:math:`\chi_{\mathrm{s}\bm{k}} = J_{0\mathrm{s}\bm{k}} (\tilde{\phi}_{\bm{k}} - v_\parallel \tilde{A}_{\parallel\bm{k}})`.
The triad transfer function satisfy the following properties
:cite:p:`supplemental-Nakata2012PoP`:

.. math::

   &J_{\mathrm{s}\bm{k}}^{\bm{p},\bm{q}} = J_{\mathrm{s}\bm{k}}^{\bm{q},\bm{p}}, \\
   &J_{\mathrm{s}\bm{k}}^{\bm{p},\bm{q}} + J_{\mathrm{s}\bm{p}}^{\bm{q},\bm{k}} + J_{\mathrm{s}\bm{q}}^{\bm{k},\bm{p}} = 0.

Note that :math:`J_{\mathrm{s}\bm{k}}^{\bm{p},\bm{q}}` is symmetrized so as to
eliminate asymmetric components, which cancel out in the net entropy
transfer :math:`I_{\mathrm{s}\bm{k}}` and thus do not contribute to physics.
Since the terms of :math:`\tilde{\phi}_{\bm{k}}` and of
:math:`\tilde{A}_{\parallel\bm{k}}` respectively correspond to
:math:`\bm{E}\times\bm{B}` and magnetic flutter nonlinearities, these
contributions can be evaluated separately,

.. math::

   I_{\mathrm{s}\bm{k}} &= I_{\mathrm{sE}\bm{k}} + I_{\mathrm{sM}\bm{k}} = \sum_{\bm{p}} \sum_{\bm{q}} J_{\mathrm{sE}\bm{k}}^{\bm{p},\bm{q}} + \sum_{\bm{p}} \sum_{\bm{q}} J_{\mathrm{sM}\bm{k}}^{\bm{p},\bm{q}}, \\
   J_{\mathrm{s}\bm{k}}^{\bm{p},\bm{q}} &= J_{\mathrm{sE}\bm{k}}^{\bm{p},\bm{q}} + J_{\mathrm{sM}\bm{k}}^{\bm{p},\bm{q}}.

.. _sec_integrals-in-gkv:

Integrals in GKV
--------------------

Flux-surface average:

.. math::

   &\left\langle \tilde{\phi} (x,y,z) \right\rangle = \sum_{k_x} \left\langle \tilde{\phi}_{k_x,k_y=0}(z) \right\rangle e^{ik_xx}, \\
   &\left\langle \tilde{\phi}_{k_x,k_y=0}(z) \right\rangle = \frac{\int_\pi^\pi dz \sqrt{g} \tilde{\phi}_{k_x,k_y=0}(z)}{\int_\pi^\pi dz \sqrt{g}}.

Volume average:

.. math::

   \int dx^3 \left|\tilde{\phi}(x,y,z)\right|^2 = \sum_{k_x} \sum_{k_y} \left\langle \left| \tilde{\phi}_{\bm{k}} (z) \right|^2 \right\rangle.

Velocity-space integral:

.. math::

   \int dv^3 \tilde{f}_{\mathrm{s}\bm{k}}(z,v_\parallel,mu) = \int_{-L_v}^{L_v}dv_\parallel \int_0^{L_v} dv_\perp 2\pi v_\perp \tilde{f}_{\mathrm{s}\bm{k}}(z,v_\parallel,\mu).

.. _sec_supplemental_references:

.. bibliography::
   :style: unsrt
   :filter: docname in docnames
   :keyprefix: supplemental-
   :labelprefix: B-
