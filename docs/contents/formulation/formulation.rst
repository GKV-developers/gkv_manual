.. _chap_formulation:

Formulation
====================

\* Blue-colored sentences are physical assumptions used in GKV
:cite:p:`formulation-Watanabe2006NF`. :redtext:`This manual is based on the GKV version gkvp_f0.65`.

.. _sec_governing-equations:

Governing equations
----------------------------------------

.. container:: assumption

   One derives gyrokinetic equations based on the following gyrokinetic
   ordering :cite:p:`formulation-Garbet2010NF`,

.. container:: assumption

   .. math::
      :label: eq:gyrokinetic_ordering

      \frac{\tilde{f}}{F} \sim \frac{e\tilde{\phi}}{T} \sim \frac{\tilde{B}}{B} \sim \frac{k_\parallel}{k_\perp} \sim \frac{\omega}{\Omega} \equiv \delta \ll 1.


GKV follows :math:`\delta f` gyrokinetics, where distribution functions are
split into equilibrium and perturbed parts :math:`\mathcal{F}=F+\tilde{f}`.
Additionally, there are some subsidiary assumptions:

.. container:: assumption

   -   separation of the equilibrium and perturbed scale lengths
       :math:`|\nabla F|/F \ll |\nabla \tilde{f}|/f` decouples neoclassical
       physics from turbulent dynamics and treats flute-type perturbations

   -   low :math:`\beta` value justifies neglect of compressional
       magnetosonic waves :math:`\tilde{B}_\parallel` and higher-order correction
       in :math:`\beta`, but retains shear Alfvénic dynamics
       :math:`\tilde{A}_\parallel`

   -   the present version of GKV treat equilibrium :math:`\bm{E} \times \bm{B}` flow shear effect.

   -   the equilibrium distribution function is to be a local Maxwellian
       :math:`F=F_\mathrm{M}=n \left(\frac{m}{2 \pi T}\right)^\frac{3}{2} e^{-\frac{mv_\parallel^2}{2T}-\frac{\mu B}{T}}`

   -   the equilibrium magnetic field satisfies the MHD equilibrium
       :math:`\nabla P = \bm{J} \times \bm{B}`

Then, the :math:`\delta f` gyrokinetic Vlasov-Poisson-Ampère equations are

.. math::
   :label: eq:vlasovinreal

   &\frac{\partial \tilde{f}_\mathrm{s}}{\partial t} + \left( \bm{V}_E + v_\parallel \frac{\bm{B} + \tilde{\bm{B}}_\perp}{B} + \tilde{\bm{v}}_\mathrm{E} + \bm{v}_\mathrm{sG} + \bm{v}_\mathrm{sC} \right) \cdot \nabla \left( \tilde{f}_\mathrm{s} + \frac{e_\mathrm{s} F_\mathrm{sM}}{T_\mathrm{s}} J_{0\mathrm{s}} \tilde{\phi} \right) \\
   &- \frac{\mu \nabla_\parallel B}{m_\mathrm{s}} \frac{\partial}{\partial v_\parallel} \left( \tilde{f}_\mathrm{s} + \frac{e_\mathrm{s} F_\mathrm{sM}}{T_\mathrm{s}} J_{0\mathrm{s}} \tilde{\phi} \right) \\
   &+ \frac{e_\mathrm{s} F_\mathrm{sM}}{T_\mathrm{s}} \left[ v_\parallel \frac{\partial J_{0\mathrm{s}} \tilde{A}_\parallel}{\partial t} - \bm{v}_{\mathrm{s}*} \cdot \nabla J_{0\mathrm{s}} (\tilde{\phi} - v_\parallel \tilde{A}_\parallel) \right] = C_\mathrm{s},

.. math::
   :label: eq:poissoninreal

    \left[ \nabla_\perp^2 - \frac{1}{\varepsilon_0} \sum_\mathrm{s} \frac{e_\mathrm{s}^2 n_\mathrm{s}}{T_\mathrm{s}} \left( 1 - \Gamma_{0\mathrm{s}} \right) \right] \tilde{\phi} = - \frac{1}{\varepsilon_0} \sum_\mathrm{s} e_\mathrm{s} \int dv^3 J_{0\mathrm{s}} \tilde{f}_\mathrm{s},

.. math::
   :label: eq:ampereinreal

    \nabla_\perp^2 \tilde{A}_\parallel = - \mu_0 \sum_\mathrm{s} e_\mathrm{s} \int dv^3 J_{0\mathrm{s}} v_\parallel \tilde{f}_\mathrm{s},


where the gyrophase-average
operators
:math:`J_{0\mathrm{s}} = \oint (d\xi/2\pi) e^{\bm{\rho}_\mathrm{s} \cdot \nabla} = \oint (d\xi/2\pi) e^{-\bm{\rho}_\mathrm{s} \cdot \nabla}`
and
:math:`\Gamma_{0\mathrm{s}} = \int dv^3 (F_\mathrm{sM}/n_\mathrm{s}) J^2_{0\mathrm{s}}`
are used with the gyroradius vector
:math:`\bm{\rho}_\mathrm{s} = \bm{b} \times m_\mathrm{s} \bm{v} / (e_\mathrm{s}B)`. :math:`\bm{V}_E = \bm{b} \times \nabla \Phi /B` denotes the equilibrium :math:`\bm{E} \times \bm{B}` flow.
The perturbed electric and magnetic fields are
:math:`\tilde{\bm{E}} = - \nabla (J_{0\mathrm{s}} \tilde{\phi}) - \bm{b} \partial \tilde{A}_\parallel /\partial t`
and
:math:`\tilde{\bm{B}}_\perp = \nabla (J_{0\mathrm{s}} \tilde{A}_\parallel) \times \bm{b}`.
The perturbed :math:`\bm{E} \times \bm{B}`, grad-B, curvature, diamagnetic drift
velocities are respectively given by
:math:`\tilde{\bm{v}}_\mathrm{E} = \bm{b} \times \nabla (J_{0\mathrm{s}} \tilde{\phi})/B`,
:math:`\bm{v}_\mathrm{sG} = \bm{b} \times \mu \nabla B/(e_\mathrm{s}B)`,
:math:`\bm{v}_\mathrm{sC} = \bm{b} \times m_\mathrm{s} v_\parallel^2 \bm{b} \cdot \nabla \bm{b}/(e_\mathrm{s}B)`
and
:math:`\bm{v}_{\mathrm{s}*} = \bm{b} \times [T_\mathrm{s} \nabla \ln n_\mathrm{s} + ( m_\mathrm{s} v_\parallel^2 /2+ \mu B - 3 T_\mathrm{s}/2) \nabla \ln T_\mathrm{s} ] /(e_\mathrm{s}B)`.
:math:`C_s` is the linearized collision term on the species :math:`s` and will be
explained in Section :ref:`sec_collision-operator`. The nonlinear term in the Vlasov
eq. (denoted :math:`\mathcal{N}_\mathrm{s}` below), which originates from
:math:`\bm{E} \times \bm{B}` and :math:`v_\parallel \tilde{\bm{B}}_\perp/B`
advections of :math:`\tilde{f}` and
:math:`\tilde{\bm{E}} \cdot \tilde{\bm{B}}_\perp` acceleration of :math:`F`, can be
rewritten as,

.. math::

     \mathcal{N}_\mathrm{s} &= \left( \tilde{\bm{v}}_\mathrm{E} + v_\parallel \frac{\tilde{\bm{B}}_\perp}{B} \right) \cdot \nabla \tilde{f}_\mathrm{s} + \frac{e_\mathrm{s} \tilde{\bm{E}}}{m_\mathrm{s}} \cdot \frac{\tilde{\bm{B}}_\perp}{B} \left(- \frac{m_\mathrm{s} v_\parallel}{T_\mathrm{s}} F_\mathrm{Ms} \right) \\
     &= \frac{\bm{b}}{B} \cdot \nabla \left( J_{0\mathrm{s}} \tilde{\phi} - v_\parallel J_{0\mathrm{s}} \tilde{A}_\parallel \right) \times \nabla \left( \tilde{f}_\mathrm{s} + \frac{e_\mathrm{s} F_\mathrm{Ms}}{T_\mathrm{s}} J_{0\mathrm{s}} \tilde{\phi} \right),

respectively.

.. _sec_geometry-and-coordinates:

Geometry and coordinates
----------------------------------------

The following explanation is conventional flux-tube model without equilibrium flow :cite:p:`formulation-Beer1995PoP`. For the numerical treatment of equilibrium flow shear effects in the rotating flux-tube model, please refer to :cite:p:`formulation-Maeyama2025JCP`.

When an equilibrium magnetic field is known, one can construct a flux
coordinate :math:`(\rho_f, \theta_f, \varphi_f)` such that,

.. math::

  \bm{B} = \nabla \Psi_p(\rho_f) \times \nabla [q(\rho_f)\theta_f - \varphi_f],

where we use the safety factor :math:`q(\rho_f) = d\Psi_t/d\Psi_p` and the
toroidal and poloidal flux :math:`\Psi_p(\rho_f)` and :math:`\Psi_t(\rho_f)`. GKV
employs Clebsch-type coordinate as

.. math::

   x &= c_x (\rho_f - \rho_{f0}), \\
   y &= c_y [q(\rho_f) \theta_f - \varphi_f], \\
   z &= \theta_f,

where :math:`\rho_{f0}`, :math:`c_x` and :math:`c_y` are
constant. We refer :math:`(x, y, z)` as the radial, field-line-label, and
field-aligned coordinates, respectively. Using this GKV coordinates, the
equilibrium magnetic field is represented by

.. math::

   \bm{B} = c_b \nabla x \times \nabla y = \frac{c_b}{\sqrt{g}} \frac{\partial \bm{r}}{\partial z},

where :math:`c_b = (d\Psi_p/d\rho_f)/(c_x c_y)` and
:math:`\sqrt{g} = (\nabla x \cdot \nabla y \times \nabla z)^{-1}`.

Simulation domain of GKV is based on the local flux-tube model
:cite:p:`formulation-Beer1995PoP`. Using flute approximation for perturbed quantities
:math:`k_\perp \gg k_\parallel` (consistent with the gyrokinetic ordering Eq.
:eq:`eq:gyrokinetic_ordering`, vector differential operators in
gyrokinetic Eqs.
:eq:`eq:vlasovinreal`--:eq:`eq:ampereinreal` become

.. math::

   \nabla_\parallel \tilde f &= \bm{b} \cdot \nabla \tilde f = \frac{c_b}{B \sqrt{g}} \frac{\partial \tilde f}{\partial z}, \\
   \nabla^2 \tilde f &= \frac{1}{\sqrt{g}} \frac{\partial}{\partial r^i} \left[ \sqrt{g} \left( \frac{\partial \tilde f}{\partial r^j} \nabla r^j \right) \cdot \nabla r^i \right] \\
   &\simeq g^{xx} \frac{\partial^2 \tilde f}{\partial x^2} + 2 g^{xy} \frac{\partial^2 \tilde f}{\partial x \partial y} + g^{yy} \frac{\partial^2 \tilde f}{\partial y^2}, \\
   \bm{b} \times \nabla \tilde h \cdot \nabla \tilde f &= \bm{b} \cdot \left(\frac{\partial \tilde h}{\partial r^i} \nabla r^i \times \frac{\partial \tilde f}{\partial r^j} \nabla r^j \right) \\
   &\simeq \frac{B}{c_b} \left( \frac{\partial \tilde h}{\partial x}\frac{\partial \tilde f}{\partial y} - \frac{\partial \tilde h}{\partial y}\frac{\partial \tilde f}{\partial x} \right), \\
   \bm{b} \times \nabla H \cdot \nabla \tilde f &\simeq \frac{B}{c_b} \left( \frac{\partial H}{\partial x}\frac{\partial \tilde f}{\partial y} - \frac{\partial H}{\partial y}\frac{\partial \tilde f}{\partial x} \right) \\
   &+ \frac{\partial H}{\partial z} \left( \frac{g^{xz}g^{yx} - g^{xx}g^{yz}}{B/c_b} \frac{\partial \tilde f}{\partial x} + \frac{g^{xz}g^{yy} - g^{xy}g^{yz}}{B/c_b} \frac{\partial \tilde f}{\partial y} \right),

where :math:`g^{ij}=\nabla r^i \cdot \nabla r^j` denotes the metric tensor.

.. container:: assumption

   Since the magnetic curvature can be replaced by

   .. math::

      \bm{b}\cdot\nabla\bm{b} = \frac{\nabla_\perp B}{B} + \frac{\nabla P}{B^2/\mu_0},

   when the equilibrium satisfies the MHD equilibrium,
   :math:`\nabla P = \bm{J} \times \bm{B}` and :math:`\nabla \times \bm{B} = \mu_0 \bm{J}`,

the
magnetic (i.e., grad-B and curvature) drift velocity is given by

.. math::

   \bm{v}_\mathrm{sG} + \bm{v}_\mathrm{sC} = \frac{1}{e_\mathrm{s} B} \bm{b} \times \left( \frac{m_\mathrm{s} v_\parallel^2 + \mu B}{B} \nabla B + \frac{m_\mathrm{s} v_\parallel^2}{B^2/ \mu_0} \nabla P \right),

and then the magnetic and diamagnetic drift terms are

.. math::

   (\bm{v}_\mathrm{sG} + \bm{v}_\mathrm{sC}) \cdot \nabla (J_0 \tilde{\phi}) = &\frac{m_\mathrm{s} v_\parallel^2 + \mu B}{e_\mathrm{s} c_b} \left( K_x \frac{\partial J_0 \tilde{\phi}}{\partial x} + K_y \frac{\partial J_0 \tilde{\phi}}{\partial y} \right) \\
   &+ \frac{m_\mathrm{s} v_\parallel^2}{e_\mathrm{s} c_b} \frac{dP/dx}{B^2/\mu_0} \frac{\partial J_0 \tilde{\phi}}{\partial y}, \\
   \bm{v}_\mathrm{s*} \cdot \nabla (J_0 \tilde{\phi}) = &- \frac{T_\mathrm{s}}{e_\mathrm{s} c_b} \left[ \frac{1}{L_{n\mathrm{s}}} + \left( \frac{m_\mathrm{s} v_\parallel^2}{2T_\mathrm{s}} + \frac{\mu B}{T_\mathrm{s}} - \frac{3}{2} \right) \frac{1}{L_{T\mathrm{s}}} \right] \frac{\partial J_0 \tilde{\phi}}{\partial y},

where

.. math::
   :label: eq:kkx

   K_x = - \frac{\partial \ln B}{\partial y} + \frac{g^{xz} g^{yx} - g^{xx} g^{yz}}{B^2/c_b^2} \frac{\partial \ln B}{\partial z},

.. math::
   :label: eq:kky

   K_y = \frac{\partial \ln B}{\partial x} + \frac{g^{xz} g^{yy} - g^{xy} g^{yz}}{B^2/c_b^2} \frac{\partial \ln B}{\partial z},

and the density and temperature scale
lengths :math:`L_{n\mathrm{s}} = - (d\ln n_\mathrm{s}/dx)^{-1}`,
:math:`L_{T\mathrm{s}} = - (d\ln T_\mathrm{s}/dx)^{-1}`, and total pressure
gradient
:math:`dP/dx = d (\sum_\mathrm{s} n_\mathrm{s} T_\mathrm{s})/dx = - \sum_\mathrm{s} n_\mathrm{s} T_\mathrm{s} (L_{n\mathrm{s}}^{-1}+L_{T\mathrm{s}}^{-1})`.

.. _sec_local-approximation:

Local approximation
----------------------------------------

Simulation box :math:`-L_x \leq x < L_x`, :math:`-L_y \leq y < L_y`,
:math:`-N_\theta \pi < z < N_\theta \pi` gives flux-tube domain aligned to the
equilibrium magnetic field.

.. container:: assumption

   By assuming the perpendicular scale separation of equilibrium and
   perturbed quantities, the equilibrium quantities can be evaluated by the
   value at the center of flux-tube domain :math:`x=0` or equivalently
   :math:`\rho_f = \rho_{f0}`. When one considers an axisymmetric equilibrium
   :math:`\partial_y=0`, the equilibrium quantities are independent to :math:`x` and
   :math:`y`, i.e., :math:`F = F(z,v_\parallel,\mu)`, :math:`B = B(z)`, and so on. In a
   non-axisymmetric equilibrium case, one may treat a thin flux-tube domain
   not only in :math:`x` but also in :math:`y` direction and evaluate the equilibrium
   quantities at :math:`x=0` and :math:`y=0`.

.. _sec_pseudo-periodic-boundary-condition-along-a-field-line:

Pseudo-periodic boundary condition along a field line
------------------------------------------------------------

Since the equilibrium quantities are independent to perpendicular :math:`x`
and :math:`y` directions, one expand the distribution function and
electromagnetic potentials by means of Fourier basis,

.. math::

   \tilde{f}_\mathrm{s}(\bm{x},v_\parallel,\mu,t) &= \sum_{k_x}\sum_{k_y} \tilde{f}_{\mathrm{s}\bm{k}} (z,v_\parallel,\mu,t) e^{i(k_xx+ik_yy)}\\
   \tilde{\phi}(\bm{x}',t) &= \sum_{k_x}\sum_{k_y} \tilde{\phi}_{\bm{k}} (z,t) e^{i(k_xx'+ik_yy')}\\
   J_{0\mathrm{s}} \tilde{\phi}(\bm{x},\mu,t) &= \sum_{k_x}\sum_{k_y} J_0(k_\perp \rho_{\mathrm{ts}}) \tilde{\phi}_{\bm{k}} (z,t) e^{i(k_xx+ik_yy)}

where :math:`\bm{x}` is the gyrocenter coordinates and
:math:`\bm{x}'=\bm{x}+\bm{\rho}_\mathrm{s}` is the particle-position
coordinates.

Additionally, considering the torus periodicity constraint
:math:`\tilde{\phi}(\rho_f,\theta_f+2N_\theta\pi,\varphi_f) = \tilde{\phi}(\rho_f,\theta_f,\varphi_f)`,
one finds the pseudo-periodic boundary condition along a field line,

.. math::
   :label: eq:boundarycondition

   \tilde{\phi}_{k_x+\delta k_x,k_y} (z+2N_\theta\pi) C_{k_y} = \tilde{\phi}_{k_x,k_y}(z),

where
:math:`\delta k_x = -2N_\theta \pi \hat{s} k_y, C_{k_y} = \exp (i2N_\theta \pi k_y c_y q_0)`.
This conversion along a field line physically means twisting of the mode
by the parallel streaming in the presence of magnetic shear.

.. _sec_collision-operator:

Collision operator
------------------------------

The present version of GKV equips three types of gyrokinetic model
collision operators, operating on the non-adiabatic part of the
distribution function
:math:`\tilde{g}_{\mathrm{s}\bm{k}} = \tilde{f}_{\mathrm{s}\bm{k}} + \frac{e_\mathrm{s} F_\mathrm{Ms}}{T_\mathrm{s}} J_{0\mathrm{s}\bm{k}} \tilde{\phi}_{\bm{k}}`.

.. note::

   .. container:: v048-text

      NOTE: Although the Lenard-Bernstein model collision gkvp_f0.48 operates
      on :math:`\tilde{f}_{\mathrm{s}\bm{k}}` but not on
      :math:`\tilde{g}_{\mathrm{s}\bm{k}}` due to historical reason, it will be
      modified near-future update.

Lenard-Bernstein model collision operator

.. math::
   :label: eq:LB_collision

   C_{\mathrm{a}\bm{k}}^\mathrm{LB} = \nu_\mathrm{a} &\Bigg[ v_\mathrm{ta}^2 \frac{\partial^2 \tilde{g}_{\mathrm{a}\bm{k}}}{\partial v_\parallel^2} + v_\mathrm{ta}^2 \frac{\partial^2 \tilde{g}_{\mathrm{a}\bm{k}}}{\partial v_\perp^2} + v_\parallel \frac{\partial \tilde{g}_{\mathrm{a}\bm{k}}}{\partial v_\parallel} \\
   &+ \left(\frac{v_\mathrm{ta}^2}{v_\perp} + v_\perp \right) \frac{\partial \tilde{g}_{\mathrm{a}\bm{k}}}{\partial v_\perp} + 3 \tilde{g}_{\mathrm{a}\bm{k}} - k_\perp^2\rho_\mathrm{ta}^2 \tilde{g}_{\mathrm{a}\bm{k}} \Bigg].


Lorentz model collision operator

.. math::
   :label: eq:Lorentz_collision

   C_{\mathrm{a}\bm{k}}^\mathrm{Lorentz} = \nu_\mathrm{D}^\mathrm{ab} &\Bigg[ \frac{v_\perp^2}{2} \frac{\partial^2 \tilde{g}_{\mathrm{a}\bm{k}}}{\partial v_\parallel^2} + \frac{v_\parallel^2}{2} \frac{\partial^2 \tilde{g}_{\mathrm{a}\bm{k}}}{\partial v_\perp^2} - v_\parallel v_\perp  \frac{\partial^2 \tilde{g}_{\mathrm{a}\bm{k}}}{\partial v_\parallel \partial v_\perp} \\
   &- v_\parallel \frac{\partial \tilde{g}_{\mathrm{a}\bm{k}}}{\partial v_\parallel} + \frac{v_\perp}{2} \left(\frac{v_\parallel^2}{v_\perp^2} - 1 \right) \frac{\partial \tilde{g}_{\mathrm{a}\bm{k}}}{\partial v_\perp} \\
   &- \frac{k_\perp^2\rho_\mathrm{ta}^2}{4v_\mathrm{ta}^2} (2v_\parallel^2+v_\perp^2) \tilde{g}_{\mathrm{a}\bm{k}} \Bigg].

Sugama model collision operator :cite:p:`formulation-Sugama2009PoP`

.. math::
   :label: eq:Sugama_collision

   C_{\mathrm{a}\bm{k}}^\mathrm{Sugama} = \sum_\mathrm{b} \left[ C^\mathrm{V}_\mathrm{ab}(\tilde{g}_{\mathrm{a}\bm{k}}) + C^\mathrm{D}_\mathrm{ab}(\tilde{g}_{\mathrm{a}\bm{k}}) + C^\mathrm{F}_\mathrm{ab}(\tilde{g}_{\mathrm{b}\bm{k}}) \right].


The test-particle
differential term :math:`C^\mathrm{V}_\mathrm{ab}`, the test-particle
non-isothermal term :math:`C^\mathrm{D}_\mathrm{ab}`, and the field-particle
term :math:`C^\mathrm{F}_\mathrm{ab}` are given by,

.. math::

   C^\mathrm{V}_\mathrm{ab}(\tilde{g}_{\mathrm{a}\bm{k}}) &= \frac{\nu_\parallel^\mathrm{ab}v_\parallel^2+\nu_\mathrm{D}^\mathrm{ab}v_\perp^2}{2}\frac{\partial^2 \tilde{g}_{\mathrm{a}\bm{k}}}{\partial v_\parallel^2} + \frac{\nu_\mathrm{D}^\mathrm{ab}v_\parallel^2+\nu_\parallel^\mathrm{ab}v_\perp^2}{2}\frac{\partial^2 \tilde{g}_{\mathrm{a}\bm{k}}}{\partial v_\perp^2} \\
   &+ (\nu_\parallel^\mathrm{ab}-\nu_\mathrm{D}^\mathrm{ab})v_\parallel v_\perp \frac{\partial^2 \tilde{g}_{\mathrm{a}\bm{k}}}{\partial v_\parallel \partial v_\perp} \\
   &+ \nu_\mathrm{g}^\mathrm{ab} v_\parallel \frac{\partial \tilde{g}_{\mathrm{a}\bm{k}}}{\partial v_\parallel} + \left[ \nu_\mathrm{g}^\mathrm{ab} + \frac{\nu_\mathrm{D}^\mathrm{ab}}{2} \left( 1 + \frac{v_\parallel^2}{v_\perp^2} \right) \right] v_\perp \frac{\partial \tilde{g}_{\mathrm{a}\bm{k}}}{\partial v_\perp} \\
   &+\left[ \frac{\nu_\mathrm{h}^\mathrm{ab} x_\mathrm{a}^2}{2} - \frac{k_\perp^2}{4\Omega_\mathrm{a}^2} \left\{ \nu_\mathrm{D}^\mathrm{ab} (2v_\parallel^2 + v_\perp^2) + \nu_\parallel^\mathrm{ab} v_\perp^2 \right\} \right] \tilde{g}_{\mathrm{a}\bm{k}}, \\
   C^\mathrm{D}_\mathrm{ab}(\tilde{g}_{\mathrm{a}\bm{k}}) &= \sum_{j=1}^6 X_j^\mathrm{ab} M_j^\mathrm{ab}, \\
   C^\mathrm{F}_\mathrm{ab}(\tilde{g}_{\mathrm{b}\bm{k}}) &= \sum_{j=1}^6 Y_j^\mathrm{ab} M_j^\mathrm{ba},

where :math:`x_\mathrm{a} = v / (\sqrt{2}v_\mathrm{ta})`,
:math:`\alpha_\mathrm{ab}=v_\mathrm{ta}/v_\mathrm{tb}`,
:math:`\nu_\mathrm{g}^\mathrm{ab} = \nu_\parallel^\mathrm{ab}x_\mathrm{a}^2(1-\alpha_\mathrm{ab})`,
and
:math:`\nu_\mathrm{h}^\mathrm{ab} = 3\sqrt{\pi}\tau^{-1}_\mathrm{ab}\alpha_\mathrm{ab}\Phi'(x_\mathrm{b})/(4x_\mathrm{a}^2)`.
The energy-diffusion and deflection frequencies are respectively given
by
:math:`\nu_\parallel^\mathrm{ab} = 3\sqrt{\pi}\tau^{-1}_\mathrm{ab}G(x_\mathrm{b})/(2x_\mathrm{a}^3)`
and
:math:`\nu_\mathrm{D}^\mathrm{ab} = 3\sqrt{\pi}\tau^{-1}_\mathrm{ab}[\Phi(x_\mathrm{b})-G(x_\mathrm{b})]/(4x_\mathrm{a}^3)`
with the error function :math:`\Phi(x) = \mathrm{erf}(x)` and
:math:`G(x) = [\Phi(x) - x \Phi'(x)]/(2x^2)`. Expressions of the other
coefficients :math:`X_j^\mathrm{ab}` and :math:`Y_j^\mathrm{ab}` and of the fluid
moments :math:`M_j^\mathrm{ab}` are found, e.g., in the literature
:cite:p:`formulation-Nakata2015CPC`.

.. _sec_summary-of-formulation:

Summary of formulation
----------------------------------------

Finally, one obtains the :math:`\delta f` gyrokinetic Vlasov-Poisson-Ampère
equations in a local flux-tube model, represented in perpendicular
wave-number space,

.. math::
   :label: eq:vlasovink

   &\frac{\partial \tilde{f}_{\mathrm{s}\bm{k}}}{\partial t} + \left( v_\parallel \nabla_\parallel + i \bm{k} \cdot \bm{v}_\mathrm{sG} + i \bm{k} \cdot \bm{v}_\mathrm{sC} \right) \left( \tilde{f}_{\mathrm{s}\bm{k}} + \frac{e_\mathrm{s} F_\mathrm{sM}}{T_\mathrm{s}} J_{0\mathrm{s}\bm{k}} \tilde{\phi}_{\bm{k}} \right) + N_{\mathrm{s}\bm{k}} \\
   &- \frac{\mu \nabla_\parallel B}{m_\mathrm{s}} \frac{\partial}{\partial v_\parallel} \left( \tilde{f}_{\mathrm{s}\bm{k}} + \frac{e_\mathrm{s} F_\mathrm{sM}}{T_\mathrm{s}} J_{0\mathrm{s}\bm{k}} \tilde{\phi}_{\bm{k}} \right) \\
   &+ \frac{e_\mathrm{s} F_\mathrm{sM}}{T_\mathrm{s}} \left[ v_\parallel \frac{\partial J_{0\mathrm{s}\bm{k}} \tilde{A}_{\parallel\bm{k}}}{\partial t} - i \bm{k} \cdot \bm{v}_{\mathrm{s}*} J_{0\mathrm{s}\bm{k}} (\tilde{\phi}_{\bm{k}} - v_\parallel \tilde{A}_{\parallel\bm{k}}) \right] = C_{\mathrm{s}\bm{k}},

.. math::
   :label: eq:poissonink

   \left[ k_\perp^2 + \frac{1}{\varepsilon_0} \sum_\mathrm{s} \frac{e_\mathrm{s}^2 n_\mathrm{s}}{T_\mathrm{s}} \left( 1 - \Gamma_{0\mathrm{s}\bm{k}} \right) \right] \tilde{\phi}_{\bm{k}} = \frac{1}{\varepsilon_0} \sum_\mathrm{s} e_\mathrm{s} \int dv^3 J_{0\mathrm{s}\bm{k}} \tilde{f}_{\mathrm{s}\bm{k}},

.. math::
   :label: eq:ampereink

   k_\perp^2 \tilde{A}_{\parallel\bm{k}} = \mu_0 \sum_\mathrm{s} e_\mathrm{s} \int dv^3 J_{0\mathrm{s}\bm{k}} v_\parallel \tilde{f}_{\mathrm{s}\bm{k}},

where
:math:`J_{0\mathrm{s}\bm{k}}=J_0(k_\perp \rho_{\mathrm{s}})` and
:math:`\Gamma_{0\mathrm{s}\bm{k}}=I_0(k_\perp^2 \rho_{\mathrm{ts}}^2)e^{-k_\perp^2 \rho_{\mathrm{ts}}^2}`
with 0th-order Bessel and modified Bessel functions :math:`J_0` and :math:`I_0`. The
included operators are again listed below,

.. math::

   \nabla_\parallel &= \frac{c_b}{B \sqrt{g}} \frac{\partial}{\partial z}, \\
   k_\perp^2 &= g^{xx} k_x^2 + 2 g^{xy} k_x k_y + g^{yy} k_y^2, \\
   i \bm{k} \cdot (\bm{v}_\mathrm{sG} + \bm{v}_\mathrm{sC}) &= \frac{m_\mathrm{s} v_\parallel^2 + \mu B}{e_\mathrm{s} c_b} \left( i K_x k_x + i K_y k_y \right) + i \frac{m_\mathrm{s} v_\parallel^2}{e_\mathrm{s} c_b} \frac{dP/dx}{B^2/\mu_0} k_y, \\
   i \bm{k} \cdot \bm{v}_\mathrm{s*} &= - i \frac{T_\mathrm{s}}{e_\mathrm{s} c_b} \left[ \frac{1}{L_{n\mathrm{s}}} + \left( \frac{m_\mathrm{s} v_\parallel^2}{2T_\mathrm{s}} + \frac{\mu B}{T_\mathrm{s}} - \frac{3}{2} \right) \frac{1}{L_{T\mathrm{s}}} \right] k_y, \\
   \mathcal{N}_{\mathrm{s}\bm{k}} &= - \sum_{\bm{k}'} \sum_{\bm{k}''} \delta_{\bm{k}'+\bm{k}'',\bm{k}}\frac{\bm{b} \cdot \bm{k}' \times \bm{k}''}{c_b} J_{0\mathrm{s}\bm{k}'} \\
   &\times \left( \tilde{\phi}_{\bm{k}'} - v_\parallel \tilde{A}_{\parallel\bm{k}'} \right) \left( \tilde{f}_{\mathrm{s}\bm{k}''} + \frac{e_\mathrm{s} F_\mathrm{Ms}}{T_\mathrm{s}} J_{0\mathrm{s}\bm{k}''} \tilde{\phi}_{\bm{k}''} \right).

The coefficients for magnetic drift :math:`K_x, K_y` are given by Eqs.
:eq:`eq:kkx` and :eq:`eq:kky`, and
the collision operator :math:`C_{\mathrm{s}\bm{k}}` is given by one of Eqs.
:eq:`eq:LB_collision` -- :eq:`eq:Sugama_collision`.


.. _sec_formulation_references:

.. bibliography::
   :style: unsrt
   :filter: docname in docnames
   :keyprefix: formulation-
   :labelprefix: 1-
