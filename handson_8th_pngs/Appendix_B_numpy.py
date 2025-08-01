#!/usr/bin/env python
# coding: utf-8

# # 多次元配列の数値計算パッケージ NumPy

# In[1]:


import numpy as np


# ## リストのNumPy配列への変換: np.array
# - np.array 関数により，リストをNumPy 配列に変換できる．この際，リストの各要素には同じ要素数
# の数値が入っている必要がある．
# - NumPy 配列の持つndim, shape, dtype などの変数により，配列の次元，形状，数値型(int64: 倍精度
# 整数, float64: 倍精度実数) が確認できる．

# In[2]:


a = np.array([1,2,3])
b = np.array([[4,5,6],[7,8,9]])
c = np.array([a,a,b[0,:],b[1,:]])
print(type(c))
print(c)
print(c.ndim)  # Numpy配列の次元（軸の数）の確認
print(c.shape) # Numpy配列の形状の確認
print(c.dtype) # Numpy配列の数値型の確認


# In[3]:


# リストの各要素の要素数が異なるなど、多次元配列の形になっていない場合は意図しない動作になる。
l_mismatch = [[1,2],[3,4],[5,6,7]]
a_mismatch=np.array(l_mismatch)
print(type(a_mismatch))
print(a_mismatch)
print(a_mismatch.ndim)
print(a_mismatch.shape)
print(a_mismatch.dtype)


# ## NumPy配列の生成
# - np.arange([start,] stop[, step]) の関数呼び出しで，start から始まり，step 刻みで増え，stop
# 未満の等差数列を生成する．step は既定値1，start は既定値0 として省略可能．
# - np.linspace(start, stop, num) の関数呼び出しで，start から始まり，stop 以下のnum 点の等差
# 数列が生成される．間隔は(stop-start)/(num-1) となり，終端点stop も含むことに注意．キーワー
# ド引数endpoint=False を指定すると，間隔(stop-start)/num で，終端点stop を除く等差数列が
# 生成される．

# In[4]:


i = np.arange(10)                     # 等差整数列の生成
x = np.arange(0, 2*np.pi, 2*np.pi/10) # 等差実数列の生成1
xl = np.linspace(0.0, 2*np.pi, 11)    # 等差実数列の生成2
print(i)
print(x)
print(xl)


# In[5]:


#関数名の候補を表示する。※*?はjupyter特有の記法
get_ipython().run_line_magic('psearch', 'np.lin*')


# In[6]:


#Numpyのヘルプを表示する。
help(np.linspace)


# ## NumPy配列の演算

# In[7]:


# 配列とスカラーの演算：要素ごとに行われる
a=np.array([1,2,3,4])
print(a+1)
print(2**a)
# 配列同士の演算：要素ごとに行われる
b=np.array([2,2,4,4])
print(a+b)
print(a*b)


# In[8]:


#PythonではForループを書かない方が計算が速い。
from time import time as timer
a=np.linspace(1,2,100000)
b=np.linspace(2,4,100000)

t1=timer()
c1=np.zeros_like(a)
for i in range(100000):
    c1[i] = a[i]*b[i]
t2=timer()
print("Elapsed time [sec] =",t2-t1)

t1=timer()
c2=a*b
t2=timer()
print("Elapsed time [sec] =",t2-t1)

print(c1==c2)


# ## NumPy配列形状の変更

# In[9]:


a=np.arange(24)    # aは 24 個の連続した値をもつ配列
print(a.shape)
a=a.reshape(2,12)  # reshapeで指定した配列形状へ変更: 12個の連続した値×2セット
print(a.shape)
a=a.reshape(3,2,4) # reshapeで指定した配列形状へ変更: (4個の連続した値×2セット)×3組
print(a.shape)
a=a.ravel()        # ravel: 1次元配列へ平坦化
print(a.shape)


# ### 多次元配列のメモリ上の連続性
# Q. 以下の2次元配列 a を1次元配列へ平坦化(ravel)すると、値の順序はどうなるか？

# In[10]:


a = np.array([[1,3],[2,4]])
print(a)
print(a.ravel())


# ## NumPy配列の総和・部分和
# - sum() 関数はNumPy 配列の全要素の和をとる．
# - 多次元配列の場合，キーワード引数axis を指定することで，指定した軸(左から順に，axis=0,1,2,...)
# のインデックスについての和をとる．d = a.sum(axis=(1,2)) の例の様に，和をとる軸を複数まとめ
# て指定することもできる．

# In[11]:


a = np.arange(24)
a = a.reshape(3,2,4)
b = a.sum()
c = a.sum(axis=2)
d = a.sum(axis=(1,2))
print(a)
print(b)
print(c.shape)
print(d.shape)


# ## Numpy配列を利用した数値積分
# - np.trapz(y, x[, axis=-1]) 関数は，離散的にサンプリングされた座標を表わす配列x と各座標位置での値y を用いて，定積分
# $\int^{\max(x)}_{\min(x)} y(x)dx$ を台形公式により数値積分する．
# - 多次元配列の場合，キーワード引数axis を指定することで，指定した軸について積分する．多変数関
# 数y(x, t) の積分などで有用．

# In[12]:


x = np.linspace(-5,5,24)
y = 1/np.sqrt(2*np.pi)*np.exp(-x**2/2)
area = np.trapezoid(y,x=x,axis=-1)
print(area)
print(r"Analytic solution: \int_{-∞}^∞ exp(-x^2/2)/√2π = 1")


# In[ ]:




