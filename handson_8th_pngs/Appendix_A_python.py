#!/usr/bin/env python
# coding: utf-8

# # Pythonの基本の関数と変数、制御文
# ---
# 
# ### (i) 画面への出力
# print関数を用いる
# ### (ii) ファイルへの出力
# テキストファイルを書き込み属性で開き、
# print関数のオプション変数 file にファイル名を指定する。

# In[1]:


print("Hello world !")


# In[2]:


f = open("output.txt",mode="w")
print("Hello world!", "to the file", file=f)
f.close()


# ### (iii) 関数のヘルプを開く

# In[3]:


help(open)


# ### (iv) Pythonにおける変数の取り扱い
# - 事前の型宣言は必要ない。代入の際に動的に割り付けられる。
# - あるデータ型を扱っていた変数名を、別のデータ型を上書きすることもできる。
# - データ型の確認には type 関数を用いる。
# - Python3では、（整数型）と（整数型）の割り算は自動型変換により実数になる。

# In[4]:


a = 5 + 6
print(a, type(a))
a = "word"
print(a, type(a))
x = 8 / 5
print(x, type(x))


# ### (v) 制御文
# - 条件分岐: if-elif-else
# - ループ: for, while と ループ制御: break, continue

# In[5]:


c = "afternoon"
if c == "morning":
    print("朝")
elif c == "afternoon":
    print("昼")
else:
    print("夜")


# In[6]:


a=0
for i in range(10): # forを利用したループ
    if i==2:
        print("# i=2 is skipped")
        continue  # 処理を中断してループの先頭に戻る
    a += i
    print("i=",i,", a=",a)
    if i>6:
        print("# When i>6, break the loop")
        break     # 処理を中断してループから抜け出す


# ### (vi) インデント記法
# Pythonでは、インデント(字下げ)により構文の範囲を決める。{...}やend文で構文の範囲を決め、インデントは自由だったCやFortranとの大きな違い。

# In[7]:


a=0
for i in range(3):
    print("i=",i)
    a += 1  #　ここまでがループ
print("a=",a)


# In[8]:


a=0
for i in range(3):
    print("i=",i)
    a += 1    
    print("a=",a)#　ここまでがループ 


# In[ ]:





# # リスト
# ---
# 
# リストは、順序付きのオブジェクトの集まりである。各要素となるオブジェクトは異なる型をとることができる。  
# len関数・・・リストの長さを表示

# In[9]:


l = [ 1, 2, 3, 8, 1.5, "word", [1,2] ]
print(l)
print(type(l))
print(len(l))
print(l[6])


# ### スライス
# ・・・リストの一部を取り出す。l[start:stop:step]
# 
# - Pythonでは、 l[start:stop] はインデックス start <= i < stop を返す。l[stop] は含まない。
# - 最初から l[:stop:step] や、最後まで l[start::step] のような省略が可能。
# - 負のインデックスは末尾から数える。

# In[10]:


print(l[0:3])  # 0 <= i < 3 の要素を取り出す


# In[11]:


print(l[0:8:2]) # step=2のインクリメントで、0 <= i < 8までの要素を取り出す。


# In[12]:


print(l[:3])    # 最初から i < 3 まで
print(l[3:])    # 3 <= i から最後まで


# In[13]:


#負のインデックスは末尾から数える。
print(l[-1])
print(l[-3])
print(l[-5::3])


# In[14]:


#ループ方法1:インデックスを数える
for i in range(len(l)):
    print(l[i])


# In[15]:


#ループ方法2:リストの要素に対してもループできる
for x in l:
    print(x)


# In[ ]:




