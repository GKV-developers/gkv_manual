# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'gkv_manual'
copyright = '2025, Shinya Maeyama'
author = 'Shinya Maeyama'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

# source/index.rst is read.
root_doc = "index"

extensions = ['myst_parser',
              'sphinx.ext.mathjax',
              'sphinxcontrib.bibtex',
              'sphinx_copybutton',
              ]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

suppress_warnings = ["bibtex.duplicate_label",    # duplicate label (bibliography directives in multi page)
                     "bibtex.duplicate_citation", # use bibliography directives in multi page
                     ]

numfig = True # for numbering figures, tables, and code-blocks
math_number_all = True  # number equations globally (all displayed equations)

## settings for extensions

## myst_parser: setting for myst_parser from https://www.sphinx-doc.org/en/master/usage/markdown.html
source_suffix = {
    '.rst': 'restructuredtext',
    '.txt': 'markdown',
    '.md': 'markdown',
}

## sphinxcontrib.bibtex: setting for sphinxcontrib.bibtex from https://sphinxcontrib-bibtex.readthedocs.io/en/latest/quickstart.html
bibtex_bibfiles = ['references.bib']
bibtex_default_style = 'unsrt'

## sphinx_copybutton
## set prompt text, such as '>>> ' and '$ ' by regexp.
## if you copy codeblock "$ cd" you can paste "cd"
## from https://sphinx-copybutton.readthedocs.io/en/latest/use.html
copybutton_prompt_text = r">>> |\.\.\. |\$ "
copybutton_prompt_is_regexp = True

## sphinx.ext.mathjax
# settings for mathjax ----------
# add amsmath, amssymb
mathjax3_config = {
    'loader': {'load': ['[tex]/ams', '[tex]/boldsymbol', '[tex]/tagformat']},
    'tex': {'macros': {'bm': ['\\boldsymbol{#1}', 1]},
            'packages': {'[+]': ['ams', 'boldsymbol', 'tagformat']},
            'tags': 'ams',
            },
    'options': {
        'tagSide': 'right',
        'tagIndent': '0.8em',
    },
}

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'sphinx_material'
html_title = 'gkv_manual'
html_static_path = ['_static']
html_extra_path = ['contents/pdf']

# for coloring
html_css_files = [
    'sphinx_role.css',
    'caption.css',
    'link_scroll.css',
    'layout.css',
    'copybtn.css',
    'alphabet_list.css',
    'backlink.css', # for disable backlink
]

html_sidebars = {
    "**": ["logo-text.html",
           "globaltoc.html",
           "localtoc.html",
           "searchbox.html",
    ]
}

# disable show link
html_show_sourcelink = False

html_favicon = "_static/favicon.ico"

## options for sphinx_material
## references https://github.com/bashtage/sphinx-material and https://github.com/bashtage/sphinx-material/blob/main/docs/conf.py
html_theme_options = {
    'nav_title': 'GKV manual',
    'color_primary': 'blue',
    'color_accent': 'light-blue',

    "html_minify": False,
    "html_prettify": True,
    "css_minify": True,
    "logo_icon": "&#xe88a",
    "repo_type": "github",

    "table_classes": ["plain"],

    # Set the repo location to get a badge with stats
    'repo_url': 'https://github.com/GKV-developers/gkv_manual/',
    'repo_name': 'gkv_manual',

    "version_dropdown": False,

    # Visible levels of the global TOC; -1 means unlimited
    'globaltoc_depth': 2,
    # If False, expand all TOC entries
    'globaltoc_collapse': True,
    # If True, show hidden TOC entries
    'globaltoc_includehidden': True,
}

# replacements before reST process
rst_prolog = """
.. role:: assumption
   :class: assumption
.. role:: ditto
   :class: ditto
.. role:: redtext
   :class: redtext
"""

## settings for LaTeX
latex_engine = 'pdflatex'

latex_elements = {
    'extraclassoptions': 'openany',
    'preamble': r'''
    \usepackage{bm}
    \usepackage{xcolor}
    % \usepackage{tcolorbox}

    %%% Convert roles to LaTeX macros.
    \newcommand{\DUroleversionzerofoureight}[1]{\textcolor{red}{#1}}
    \newcommand{\DUroleditto}[1]{\textcolor{black!40}{\small #1}}
    \newcommand{\DUroleredtext}[1]{\textcolor{red}{#1}}

    %%% container:: assumption を「青字」で表示（枠なし）
    \newenvironment{sphinxclassassumption}
    {\par\begingroup\color{blue}\noindent}
    {\par\endgroup}
    '''
}

latex_documents = [
    (root_doc, 'gkv_manual.tex', 'GKV manual', author, 'manual'),
]
