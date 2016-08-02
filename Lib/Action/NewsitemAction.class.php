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
		 
		$Article	=	D("Article");
            
		$condition['id_article']	=	$_GET['id'];
            
            
		$vo = $Article->where($condition)->find(); // 查询数据   
			if($vo) {
                $data = array();
                $data['hit_num'] = $vo['hit_num'] + 1;
                
                $Article->where($condition)->save($data);			   
                $vo['hit_num'] = $data['hit_num'];
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
