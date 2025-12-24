.. gkv_manual documentation master file, created by
   sphinx-quickstart on Fri Dec  5 09:41:51 2025.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.


GKV manual
======================================

.. toctree::
   :maxdepth: 1
   :caption: Table of Contents:
   :numbered: 5

   ./contents/formulation/formulation.rst
   ./contents/normalization/normalization.rst
   ./contents/discretization/discretization.rst
   ./contents/simulation/simulation.rst
   ./contents/diagnostics/diagnostics.rst

.. raw:: latex

   \appendix
   \renewcommand{\thefigure}{\thechapter.\arabic{figure}}
   \renewcommand{\thetable}{\thechapter.\arabic{table}}
   \renewcommand{\theequation}{\thechapter.\arabic{equation}}
   \renewcommand{\theliteralblock}{\thechapter.\arabic{literalblock}}

.. toctree::
   :maxdepth: 2

   ./contents/appendix/index.rst

.. toctree::
   :maxdepth: 1

   ./contents/supplemental/supplemental.rst

.. no numbering
.. raw:: latex

   \setcounter{secnumdepth}{-1}
   \renewcommand{\thefigure}{\arabic{figure}}
   \renewcommand{\thetable}{\arabic{table}}
   \renewcommand{\theequation}{\arabic{equation}}
   \renewcommand{\theliteralblock}{\arabic{literalblock}}

.. toctree::
   :maxdepth: 1

   ./contents/tutorial/tutorial.md

.. only:: html

   PDF document
   --------------------
   `Download PDF <gkv_manual.pdf>`_

Update history
--------------------

.. list-table::
   :widths: 2 4
   :header-rows: 1

   * - Date
     - Contents
   * - December 11, 2025
     - Updated for gkvp_f0.65.
   * - November 26, 2025
     - Translated from LaTeX to MkDocs and Read the Docs.
   * - March 15, 2018
     - Add an explanation on adiabatic electron/ion model.
   * - March 8, 2018
     - First draft based on gkvp_f0.48.
