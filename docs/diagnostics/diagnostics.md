# Diagnostics {#chap:diagnostics}

## Output files of GKV {#sec:output-files-of-gkv}

When finishing a run of GKV, all simulation output will be dumped in the
output directory `DIR` set in the `run/shoot` script (for example in
Figure [5.3](../simulation/simulation.md#fig:run-shoot),
`DIR=/data/maeyama/gkv_training/test01/`), as classified into the
following directories,

-   `DIR/`

    -   `log/` (Log files on simulation runs)

    -   `cnt/` (Binary data for restart)

    -   `fxv/` (Binary data of distribution functions
        $\tilde{f}_{\mathrm{s}\bm{k}}(k_x,k_y,v_\parallel,\mu)$ at
        several positions of $z$)

    -   `phi/` (Binary data of potentials, fluid moments, and variables
        in the entropy balance equation)

    -   `hst/` (Ascii data of the GKV standard output)

    -   \... (Others are back up of the source code and environmental
        settings)

List of GKV output is summarized in
[Appendix X](../appendix/list-of-gkv-namelist.md#sec:list-of-gkv-namelist){ .sec-ref data-target-id="sec:list-of-gkv-namelist" data-prefix="Appendix" }.

Users may diagnose these output data by themselves. The present version
of GKV provides two post-processing tools, `gkvfig` and `diag_python` on [GKV GitHub page](https://github.com/GKV-developers).


## gkvfig - Generating PDF of GKV standard ASCII output {#sec:pdf-generating-script-for-ascii-output-fig_stdout}

**gkvfig** is a Python package that generates a summary figure PDF of GKV standard ASCII output.
(Previous `fig_stdout` tool using shell/awk/gnuplot/latex is converted to Python.)


### Installation

To install from PyPI:
```bash
pip install gkvfig
```
Or install the latest development version from GitHub:
```bash
pip install git+https://github.com/GKV-developers/gkvfig.git
```


### Usage

#### **(i) Basic usage: As a command line tool**
```sh
python -m gkvfig -d DIR
```
The argument `DIR` is the path of GKV output directory. The namelist file `DIR/gkvp.namelist.001`, log file `DIR/log/gkvp.000000.0.log.001`, and hst directory `DIR/hst/` should exist.
You get a summary PDF file `CWD/figpdf_yyyymmdd_hhmmss/fig_stdout.pdf`.

#### **(ii) As a Python function**

```python
from gkvfig import gkvfig

gkvfig(gkv_stdout_dir="YOUR GKV OUTPUT DIR")
```
You get a summary PDF file `CWD/figpdf_yyyymmdd_hhmmss/fig_stdout.pdf`, always in the current working directory `CWD`.


### Dependencies

gkvfig requires the following Python packages:
- `numpy`, `matplotlib`, `pandas`, `reportlab`, `pypdf`


## diag_python - Post-processing tool for BINARY output {#sec:post-processing-program-for-binary-output-diag}

**diag_python** is a set of Python scripts, which read Zarr format files of GKV binary output. (Python version of the previous Fortran post-processing tool `diag`.)



### How to use diag_python
(i) Copy whole `diag_python/` into the output directory of GKV. For example,  

-  `YOUR_GKV_EXECUTED_DIR/`
     - `diag_python/`
     - `cnt/` (Zarr format files \*.zarr will be read by diag_python)
     - `fxv/` (Zarr format files \*.zarr will be read by diag_python)
     - `phi/` (Zarr format files \*.zarr will be read by diag_python)
     - `hst/` (gkvp.mtr.001 will be read by diag_python)
     - `src/` (gkvp_header.f90 will be read by diag_python)
     - `log/`
     - `gkvp_namelist.001` (gkvp_namelist.001 will be read by diag_python)

(ii) Initial settings in `main.py`:  

```python
import sys
sys.path.append("./src/")
from diag_rb import rb_open, rb_get_tri_filelist
from diag_geom import geom_set
### Read Zarr store gkvp.phi.*.zarr/ by xarray ###
xr_phi = rb_open('../phi/gkvp.phi.*.zarr/')
xr_Al  = rb_open('../phi/gkvp.Al.*.zarr/')
xr_mom = rb_open('../phi/gkvp.mom.*.zarr/')
xr_fxv = rb_open('../fxv/gkvp.fxv.*.zarr/')
xr_cnt = rb_open('../cnt/gkvp.cnt.*.zarr/')
xr_trn = rb_open('../phi/gkvp.trn.*.zarr/')
tri_filelist = rb_get_tri_filelist('../phi/gkvp.tri.*.zarr/')
xr_tri_list=[]
for file in tri_filelist:
    xr_tri=rb_open(file + '.*.zarr/')
    xr_tri_list.append(xr_tri)
### Set geometric constants ###
geom_set(headpath='../src/gkvp_header.f90', nmlpath="../gkvp_namelist.001", mtrpath='../hst/gkvp.mtr.001')
```

(iii) Call functions, e.g.:
```python
from out_mominxy import phiinxy
# Plot phi[y,x] at t[it], zz[iz]
it = 3
iz = 8
phiinxy(it, iz, xr_phi, flag="display")
```
See help(phiinxy) for details.

For more details,
[Appendix X](../appendix/diagnostics-modules-in-the-post-processing-program-diag.md#sec:diagnostics-modules-in-the-post-processing-program-diag){ .sec-ref data-target-id="sec:diagnostics-modules-in-the-post-processing-program-diag" data-prefix="Appendix" } 
shows some examples of diagnostics modules.
