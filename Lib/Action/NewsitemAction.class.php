<?php
class NewsitemAction extends CommonAction{
    
    function _initialize() {
         
        $Type = M('MenuTenfei'); 
		$Tlist=$Type->order('sort asc')->select();		
		$this->assign('otype',$Tlist);
		
        $newType = array();        
        foreach ($Tlist as $key => $value)
        {        
            $newType[$value['id']] = $value['title'];
        }
        $this->assign('cntype',$newType);
        
        
    }
    
    public function index(){
        $pid = 122;
        $this->assign( "ppid", $pid );
		if(!empty($_GET['id'])) { 
		 
		$Article	=	M("Article");
            
		$condition['id_article']	=	$_GET['id'];
            
		$vo = $Article->where($condition)->find(); // 查询数据   
			if($vo) {
				$this->assign('vo',$vo);
				$this->display();
			}else{
				exit('页面不存在！');
			}
		}else{
			exit('页面不存在！');
		}

    }
	

}
?>
