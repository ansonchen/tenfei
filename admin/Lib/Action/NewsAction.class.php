<?php
class NewsAction extends CommonAction {

     function _initialize() {



        //站点信息
		$site = M('site'); // 实例化模型类

		$condition['id_site']	=	1;

		$siteD = $site->where($condition)->find(); // 查询数据

		$this->assign('site',$siteD); // 模板变量赋值

        $Type = M('MenuTenfei');
		$Tlist=$Type->order('sort desc')->select();
		$this->assign('otype',$Tlist);

         $newType = array();
        foreach ($Tlist as $key => $value)
        {
            $newType[$value['id']] = $value['title'];
        }
        $this->assign('cntype',$newType);

         $newsort = array();
         for($i = 1; $i < 9;$i++){
             array_push($newsort,$i);
         }
          $this->assign('newsort',$newsort);

    }

    public function build(){

        $DB = D('ArticleView');
        $where['menu_pid'] = 122;
        $where['bORn_article'] = 'n';
        $DBlist = $DB->field("id_article,title_article,summary_article,picturePath")->where($where)->order('sort asc')->limit(8)->select();
		//$this->assign('menub',$DBlist);
        //$code =  str_replace("\\/", "//",json_encode($DBlist));
        $code = json_encode($DBlist);
        $content = 'var indexdb ='.$code.';';



       // $content = file_get_contents("http://localhost/a.php");//得到文件执行的结果
        $of = fopen('../Public/indexDB.js','w');//创建并打开dir.txt
        if($of){
         fwrite($of,$content);//把执行文件的结果写入txt文件
         $this->ajaxReturn('','成功！',1);
        }
        fclose($of);
        //$this->display(); // 输出模板

    }

	// 框架首页 CommonAction
	public function index() {

		import("ORG.Util.Page");

		$Article = D('ArticleView');

        $pid = $_GET['pid'];
        $type = $_GET['type'];
        $key= $_GET['key'];
        
        
		//$pid = 123;
		//$where['bORn_article'] = 'n';
        $where['menu_pid'] = $pid;
        
        if(!empty($type) && $type !='*'){
            $where['typeIds_article'] = $type;
        }
        if(!empty($key)){
            $where['title_article'] = urldecode($key);
        }
		if(!$_SESSION['administrator'])
		{
$where['writerId_article']=  $_SESSION [C ( 'USER_AUTH_KEY' )];
		}

		$count = $Article->where($where)->count();//计算总数
        $p = new Page ( $count, 10 );
		$Mlist=$Article->where($where)->limit($p->firstRow.','.$p->listRows)->order('updateTime_article desc,sort asc')->select();//findAll
		$p->setConfig('header','页面');

		$p->setConfig('prev',"&laquo; 上一页");
		$p->setConfig('next','下一页 &raquo;');
		$p->setConfig('first','&laquo; 第一页');
		$p->setConfig('last','最后一页 &raquo;');
		$page = $p->show ();
		$this->assign( "page", $page );
        $this->assign( "ppid", $pid );
        $this->assign( "key", urldecode($key));
        $this->assign( "selecttype", $type );
        

		//$Mlist = $Node->order('sort_node asc')->select();
        $this->assign('today',date('Y-m-d',time()));

		$this->assign('article',$Mlist);


		$this->display(); // 输出模板

		}

		//更新角色状态
	public function updateStatus(){

		if(!empty($_GET['id'])) {

			$Role	=	M("Article");
			$where['id_article'] = $_GET['id'];
			$data = array();
			$data['bORn_article'] = $_GET['status'];
			$Role->where($where)->save($data);
			if($Role!==false){
                $this->ajaxReturn('','更新状态成功！',1);
					//$this->success('更新状态成功！');
				}else{
                    $this->ajaxReturn('','没有更新任何数据',0);
					//$this->error("没有更新任何数据!");
				}


		}else{
			exit('编辑项不存在！');
		}




	}
	//取删除文章数据
	public function delete() {
		if(!empty($_GET['id_article'])) {


		$Article	=	M("Article");
		$condition['id_article']	=	$_GET['id_article'];
		$vo = $Article->where($condition)->find(); // 查询数据

			if($vo) {
				$this->assign('vo',$vo);
				$this->display();
			}else{
				exit('删除项不存在！');
			}
		}else{
			exit('删除项不存在！');
		}
	}

		//取查看新闻数据
	public function show() {
		if(!empty($_GET['id'])) {


		$Article	=	M("Article");
		$condition['id_article']	=	$_GET['id'];
		$vo = $Article->where($condition)->find(); // 查询数据

			if($vo) {
				$this->assign('vo',$vo);
				$this->display();
			}else{
				exit('删除项不存在！');
			}
		}else{
			exit('删除项不存在！');
		}
	}

	// 删除文章
	public function delArticle() {
		if(!empty($_POST['id_article'])) {
			$Article	=	M("Article");
			$result	=	$Article->delete($_POST['id_article']);
			if(false !== $result) {
				$this->ajaxReturn($_POST['id_article'],'删除成功！',1);
			}else{
				$this->error('删除出错！');
			}
		}else{
			$this->error('删除项不存在！');
		}
	}


	//取编辑文章数据
	public function edit() {
		if(!empty($_GET['id_article'])) {


		$Article	=	D("ArticleView");
		$condition['id_article']	=	$_GET['id_article'];
		$vo = $Article->where($condition)->find(); // 查询数据


			//$vo	=	$Node->getById($_GET['id_node']);

			if($vo) {
				$this->assign('vo',$vo);
				$this->display();
			}else{
				exit('编辑项不存在！');
			}
		}else{
			exit('编辑项不存在！');
		}
	}


	//更新文章
	public function updateArticle(){
		if(!empty($_POST['id_article'])) {

            $_POST['updateTime_article'] = strtotime($_POST['updateTime_article']);

			$Article	=	D("Article");
			if($vo = $Article->create()) {
				$list=$Article->save();
				if($list!==false){
					$this->success('数据更新成功！');
				}else{
					$this->error("没有更新任何数据!");
				}
			}else{
				$this->error($Article->getError());
			}

		} else{
			exit('编辑项不存在！');
		}

	}


	//添加文章
	public function addArticle() {

		$Article    =    D("Article");
         $_POST['updateTime_article'] = strtotime($_POST['updateTime_article']);
        if($vo = $Article->create()) {
            if(false!==$Article->add()){
                $vo['id_article']     =    nl2br($vo['id_article']);
				   //date('Y-m-d H:i:s',$vo['create_time']);
                $this->ajaxReturn($vo,'表单数据保存成功！',1);
            }else{
               $this->error('数据写入错误！');
            }
        }else{
            $this->error($Article->getError());
        }

	}

}
?>
