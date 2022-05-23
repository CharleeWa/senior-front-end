# 常用命令

- ifconfig
- ip addr 显示ip信息

# yum

- yum 一个在CentOS中的shell 前端软件包管理器
- yum update 更新所有软件
- yum install、yum remove

# vi/vim

- vi linux自带文本编辑器
- vim vi升级，更强大

- 命令模式

>>> i:输入模式
>>> x:删除当前光标所在处字符
>>> :切换到底线命令模式

- 输入模式

- 底线命令模式

>>> q退出程序
>>> w 保存文件
>>> set number 显示行号


# 系统信息

- free -m 内存信息
- df -h 硬盘信息
- cat/proc/cpuinfo cpu信息

# 文件系统

- cd 进入目录
- ls 列出目录信息
- touch 新建文件
- mkdir 新建目录
- rm 删除文件或者目录
- cp 复制
- mv 移动（重命名）

# 搜索、查找、读取

- tail 从文件尾部读取
- head 从文件头部读取
- cat 读取整个文件
- more/less 分页读取
- grep 搜索关键字
- find 查找文件
- | 管道传递命令
- ……

# 压缩和解压

- tar 用于压缩及解压
- tar -czvf 打包压缩
- tar -tzvf 列出压缩文件内容
- tar -xzvf 解压文件

# 用户操作

- useradd/adduser 添加用户
- passwd 设置密码
- userdel 删除用户
- sudo 提权

# 典型应用 - 防火墙

**服务设置**

- 安装、启动、检查服务状态、关闭/禁用

**防火墙设置**

- 查询服务、查询开放端口、查询端口、添加开放端口

# Apache

**服务设置**

- 安装 yum install httpd
- 启动 service httpd start
- 检查服务状态 service httpd status
- 关闭、重启 service httpd stop/restart