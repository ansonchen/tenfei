<?php
class AboutAction extends CommonAction{
    
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
        
    	
	
		$Article = D('Article');         
        $pid = 106;
		//$pid = 123;
        $this->assign( "ppid", $pid );
        		
        
        if(!empty($_GET['type'])) {
        $xpid = $_GET['type'];    
        }else {
            
        $Type = M('MenuTenfei'); 
        $wheretype['pid'] = $pid;
		$Tlist=$Type->where($wheretype)->order('sort asc')->find();
        $xpid = $Tlist['id'];
            
        }   

			
        $Article	=	M("Article");
            
		$condition['typeIds_article']	=	$xpid;
            
		$vo = $Article->where($condition)->order('sort asc')->find(); // 查询数据   
			if($vo) {
				$this->assign('vo',$vo);
				$this->display();
			}else{
				exit('页面不存在！');
			}
            
              
    }
	
	

}
?>
