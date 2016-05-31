<?php
import('ViewModel');
class ArticleViewModel extends ViewModel {
    protected $viewFields = array(
        'Article'=>array('id_article','title_article','subtitle_article','summary_article','content_article','writer_article','writerId_article','updateTime_article','typeIds_article','menu_pid'), 
        
		//'MenuTenfei'=>array('pid'=>'menupid', '_on'=>'Article.typeIds_article=MenuTenfei.id'),
		//'Type'=>array('name_type'=>'nameType', '_on'=>'Article.typeIds_article=Type.id_type'), 
    );
}
?>
