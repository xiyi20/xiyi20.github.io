// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "随行记", "        随行记                                            兮夕哎                  &#33436 &#28246 &#65292 &#36215 &#39134 &#65281   Mr.&#25140  &#30340 PYTHON&#28304 &#30721 &#65306     CSDN    GitHub      储存库                     ", "随心记录点东西，日用");
   this[database_length++] = new SearchPage("lsp.html", "绅士好！", "        绅士好！                            这是网站  这是软件      &#23494 &#30721 &#65306 didi  主页     ", "");
   this[database_length++] = new SearchPage("注意身体.html", "注意身体", "        注意身体                              &#23089 &#20048 &#21151 &#33021  &#19981 &#23450 &#26399 &#32500 &#25252 &#65292 &#22914 &#26524 &#25346 &#20102 &#35831 &#32852 &#31995  wanandsc@gmail.com   返回上级    0%      接口一    接口二    接口三    接口亖     ", "");
   this[database_length++] = new SearchPage("fz.py.html", "佛祖保佑.py", "        佛祖保佑.py                             fozu.py          Friday, August 20, 2021     def fozu     &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp  _ooOoo_&nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  o8888888o&nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp  88&nbsp  .&nbsp  88&nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp     -_-   &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp  O   = /O&nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  ____/`---'  ____&nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp  .&nbsp &nbsp  '      // `.&nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  /            //   &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  / _      - -      -   &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp             - ///    &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp      _  ''  ---/''    &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp     .-  __ `-` ___/- /&nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp  ___` .' /--.--   `  __&nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp  .&quot &quot  '&lt  `.___  _&lt  &gt _/___.' &gt '&quot &quot .&nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp        `-   ` `   _ /` .`/ - `      &nbsp &nbsp &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp        `-   _ __   /__ _/ .-` / /&nbsp &nbsp  &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  ======`-.____`-.___  _____/___.-`____.-'====== &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp  `=---='&nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  .............................................&nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  佛祖镇楼&nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp  BUG远离&nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  Zen of python &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  Beautiful is better than ugly.；&nbsp &nbsp  &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  Explicit is better than implicit.&nbsp &nbsp &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  Simple is better than complex.&nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  Complex is better than complicated.&nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  Flat is better than nested.&nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  Sparse is better than dense.&nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  Readability counts.&nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp  &quot    &nbsp &nbsp &nbsp  print &quot &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  Now is better than never.&nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp  &quot      fozu       Send Comments        主页  &#20315 &#31062 &#20445 &#20305 .py     ", "");
   this[database_length++] = new SearchPage("mima.py.html", "密码加解密.py", "        密码加解密.py                      &#23494 &#30721 &#21152 &#35299 &#23494 .py         密码加解密.py          Friday, August 20, 2021     print '——————————————————————————————————————————密码加/解密程序———————————————————————————————————————————'     choose=input '请输入您想要使用的密码功能 加/解 ：'       if choose=='加'   &nbsp &nbsp &nbsp  previouspassword=input '请输入密码 纯数字且首位不为0 ：'   &nbsp &nbsp &nbsp  key=input '请输入密钥 同上 ：'   &nbsp &nbsp &nbsp  password=int previouspassword  int key   &nbsp &nbsp &nbsp  print '加密后密码是 '+str password        if choose=='解'   &nbsp &nbsp &nbsp  pass_word=input '请输入被加密的密码：'   &nbsp &nbsp &nbsp  key_word=input '请输入密钥：'   &nbsp &nbsp &nbsp  previous_password=int pass_word  int key_word   &nbsp &nbsp &nbsp  print '解密后的密码是：'+str previous_password       Send Comments        主页     ", "");
   this[database_length++] = new SearchPage("sjx.py.html", "三角形面积计算.py", "        三角形面积计算.py                      &#19977 &#35282 &#24418 &#38754 &#31215 &#35745 &#31639 .py         sjx.py          Friday, August 20, 2021     def triangle     &nbsp &nbsp &nbsp  # 定义一个三角形函数  &nbsp &nbsp &nbsp  name=input &quot 请问，您叫什么名字?&quot    &nbsp &nbsp &nbsp  age=int input '请问，您多大了'    &nbsp &nbsp &nbsp  if age&lt 5   &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  print  '对不起，您太小了用不上这玩意'   &nbsp &nbsp &nbsp  else   &nbsp &nbsp  &nbsp &nbsp  print '您好'+name   &nbsp &nbsp  &nbsp &nbsp  print '这是一个计算三角形面积的小程序，欢迎使用'   &nbsp &nbsp  &nbsp &nbsp  print '下面'   &nbsp &nbsp  &nbsp &nbsp  width=int input '请输入三角形的底 '    &nbsp &nbsp  &nbsp &nbsp  high=int input '请输入三角形的高 '    &nbsp &nbsp  &nbsp &nbsp  print '三角形的面积是 '+str width high/2    &nbsp &nbsp  &nbsp &nbsp  print '谢谢使用'   triangle       Send Comments        主页     ", "");
   this[database_length++] = new SearchPage("girl.py.html", "爬虫", "        爬虫                      &#29228 &#34411 .py &#28304 &#20110 CSDN   主页         girl.py          Friday, August 20, 2021     import time  import requests  from bs4 import BeautifulSoup  import os  import random    url_pattern = &quot https //www.mmkk.me/category/weimei/  /&quot     headers =    &nbsp &nbsp &nbsp  'User-Agent' 'Mozilla/5.0  Windows NT 10.0  Win64  x64  AppleWebKit/537.36  KHTML, like Gecko  Chrome/92.0.4515.107 Safari/537.36 Edg/92.0.902.62',  &nbsp &nbsp &nbsp  'Connection'  'keep-alive'     # 爬取前5页  for i in range 1, 6    &nbsp &nbsp &nbsp  time.sleep 10   &nbsp &nbsp &nbsp  url = url_pattern.format i   &nbsp &nbsp &nbsp  response = requests.get url=url, headers=headers   &nbsp &nbsp &nbsp  # 解码  &nbsp &nbsp &nbsp  response.encoding = 'utf-8'  &nbsp &nbsp &nbsp  response.raise_for_status    &nbsp &nbsp &nbsp  soup = BeautifulSoup response.text, 'html.parser'   &nbsp &nbsp &nbsp  # 相册链接  &nbsp &nbsp &nbsp  results = soup.find_all 'a',attrs= &quot class&quot  &quot item-link&quot       &nbsp &nbsp &nbsp  # 循环所有相册链接  &nbsp &nbsp &nbsp  for j in results   &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  time.sleep random.randint 8,13    &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  url_imgs = j.attrs 'href'   &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  # 相册名  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  path_name = j.get_text  .strip    &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  # 创建图片保存路径  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  if not os.path.exists path_name    &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  os.makedirs path_name, exist_ok=True   &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  response_imgs = requests.get url=url_imgs, headers=headers   &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  # 解码  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  response_imgs.encoding = 'utf-8'  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  response_imgs.raise_for_status    &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  soup_imgs = BeautifulSoup response_imgs.text, 'html.parser'   &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  # 图片链接  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  results_imgs = soup_imgs.find_all 'div',attrs= &quot data-fancybox&quot  &quot gallery&quot     &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  # 循环所有图片链接  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  for k in range len results_imgs     &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  img = results_imgs k .attrs 'data-src'   &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  file_name = path_name + '_' + str k+1  + '.png'  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  file_name = os.path.join path_name, file_name   &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  if not os.path.exists file_name    &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp  time.sleep random.randint 3,8    &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp  r = requests.get img, headers=headers   &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp  if r.status_code == 200   &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  with open file_name, 'wb'  as f   &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp  f.write r.content      Send Comments           ", "");
   return this;
}
