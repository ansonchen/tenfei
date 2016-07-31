<?php
class SitetfAction extends CommonAction {

	// 框架首页 CommonAction
	public function index() {
	
        $sitetf = D('SiteTf'); // 实例化模型类  
		 
		$condition['id_site']	=	1;
		
		$siteD = $sitetf->where($condition)->find(); // 查询数据   
		
		$this->assign('sitetf',$siteD); // 模板变量赋值
        
		$this->display(); // 输出模板   
		
		}
	
    public function build(){
        
        $DB = D('SiteTf'); 
        $where['id_site'] = 1;    
        
        $DBlist = $DB->select(); 
		//$this->assign('menub',$DBlist);
        //$code =  str_replace("\\/", "//",json_encode($DBlist));
        $code = json_encode($DBlist);
        $content = 'var indexCon ='.$code.';';
        
       
                         
       // $content = file_get_contents("http://localhost/a.php");//得到文件执行的结果
        $of = fopen('../Public/indexCon.js','w');//创建并打开dir.txt
        if($of){
         fwrite($of,$content);//把执行文件的结果写入txt文件
         $this->ajaxReturn('','成功！',1);   
        }
        fclose($of);
        //$this->display(); // 输出模板 

    }
	
		//更新站点信息
	public function editSite(){
		if(!empty($_POST['id_site'])) {
		
			$Site	=	D("SiteTf");
	  
			if($vo = $Site->create()) {
				$list=$Site->save();
				if($list!==false){
					$this->success('数据更新成功！');
				}else{
					$this->error("没有更新任何数据!");
				}
			}else{
				$this->error($Site->getError());
			}	
		
		} else{
			exit('编辑项不存在！');
		}
	
	}
	

	

	
	


}
?>
