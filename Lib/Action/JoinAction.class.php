<?php
class JoinAction extends CommonAction{
    
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
        
    	import("ORG.Util.Page"); 
	
		$Article = D('Article');         
        $pid = 124;
		//$pid = 123;
        
        		
        
        if(!empty($_GET['type'])) {
        $xpid = $_GET['type'];    
        }else {
            
        $Type = M('MenuTenfei'); 
        $wheretype['pid'] = $pid;
		$Tlist=$Type->where($wheretype)->order('sort asc')->find();
        $xpid = $Tlist['id'];
            
        }   
		$where['bORn_article'] = 'n';
        $where['menu_pid'] = $pid;
        
        $where['typeIds_article'] = $xpid;
        // $pid = $_GET['pid'];
        
		$count = $Article->where($where)->count();//计算总数
        
        $p = new Page ( $count, 15 );
		$Mlist=$Article->where($where)->limit($p->firstRow.','.$p->listRows)->order('updateTime_article desc,sort asc')->select();//findAll
		$p->setConfig('header','记录');

		$p->setConfig('prev',"&laquo; 上一页");
		$p->setConfig('next','下一页 &raquo;');
		$p->setConfig('first','&laquo; 第一页');
		$p->setConfig('last','最后一页 &raquo;');
		$page = $p->show ();
		$this->assign( "page", $page );
        $this->assign( "ppid", $pid );
		$this->assign( "xpid", $xpid );	
		//$Mlist = $Node->order('sort_node asc')->select(); 
		
		$this->assign('article',$Mlist);

		
		$this->display(); // 输出模板   
    }
	
	
	//生成验证码
	public function code() 
    {
		$type	 =	 isset($_GET['type'])?$_GET['type']:'gif';
        import("ORG.Util.Image");
		Image::UPCA('15819817119');
       // Image::buildImageVerify(4,1,$type);
    }

}
?>
