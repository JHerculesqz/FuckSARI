# 编译构建
	STEP1.配置application.properties
		根据生产环境和测试环境，修改如下注释：
		#spring.profiles.active=debug
		spring.profiles.active=prod
		#spring.data.mongodb.host=127.0.0.1
		spring.data.mongodb.host=db
	STEP2.maven编译
		mvn clear install
	STEP3.产生安装包
		执行z.tools\publish.bat
	
	最终，安装包生成到bin目录下
	
	遗留问题：依赖natasha和hulk两个包，在maven中心仓和npm中心仓需要等待审批

# 部署
	STEP0.上传安装包到服务器(假定服务器目录如下)
		opt
		-images
		--FuckSARI
		-FuckSARI_db
		
	STEP1.下载mongodb镜像(第一次安装才需要执行此步骤)
		docker pull mongo:3.4.6
	STEP2.删除容器与镜像
		docker rm -f FuckSARI_db
		docker rmi jherculesqz/sari:1.0.0
	STEP3.如果需要清除数据库，手工删除(可选)
		rm -rf /opt/FuckSARI_db
	STEP4.编译镜像
		cd /opt/images/FuckSARI
		docker build -t jherculesqz/sari:1.0.0 .
		cd /opt/
		docker images

# 启动镜像
	STEP1.进入根目录
		cd /opt
	STEP2.如果数据库没有启动，则启动;修改"27016"/"FuckSARI_db",启动FuckSARI
		docker run -d -p 27017:27017 -v $PWD/FuckSARI_db:/data/db --name FuckSARI_db mongo:3.4.6
		docker run -d -p 9001:9001 -v $PWD/images/FuckSARI:/FuckSARI --name sari --link FuckSARI_db:db jherculesqz/sari:1.0.0
		docker ps -a

# 设置云服务器
	STEP1.开放9001