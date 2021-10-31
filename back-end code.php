<?php

class PublicAction extends CommonAction{
    public function index(){
       	$newbook=M('Zybook');
       	$newid=$_GET['newid'];
       	$username=$_GET['username'];
       	$tims=date('Y-m-d H:m:s',time());
       	$newbook->data([
       		'newid' =>$newid,
       		'username' => $username,
       		'created_time' => $tims
       	]);
       	$newbook->add();
        echo 1;
        exit();
    }
    public function fangan(){
    	$zyfn=M('Zyfangan');
    	$zym=M('Zymaterial');
    	$newid=$_GET['newid'];
    	$username=$_GET['usernam'];
    	$suan=$_GET['suan']; 
    	$tian=$_GET['tian'];
    	$ku=$_GET['ku'];
    	$la=$_GET['la'];
    	$xian=$_GET['xian'];
    	/*$jb=$_GET['jb'];
    	$tnb=$_GET['tnb'];
    	$gxy=$_GET['gxy'];
    	$xzb=$_GET['xzb'];
    	$tf=$_GET['tf'];
    	$zf=$_GET['zf'];
    	$zfg=$_GET['zfg'];
    	$hy=$_GET['hy'];*/
    	$where['suan']=$suan;
    	$where['tian']=$tian;
    	$where['ku']=$ku;
    	$where['la']=$la;
        $where['xian']=$xian;
    	/*$where['tnb']=$tnb;
    	$where['gxy']=$gxy;
    	$where['xzb']=$xzb;
    	$where['tf']=$tf;
    	$where['zf']=$zf;
    	$where['zfg']=$zfg;
        $where['hy']=$hy;*/
    	$result=$zym->where($where)->select();
    	$nums=count($result);
    	$fangans=array("A","B","C","D");
    	$fnnums=0;
    	$material=array();
    	$temp="";
    	for($i=0;$i<$nums;$i++){
    		if($temp==""){
                $temp=$result[$i]['name'];
            }else{
                $temp=$temp.",".$result[$i]['name'];
            }
            if($fnnums==4){
    			break;
    		}
            $fnnums++;
    	}
    	//array_push($material,$temp);
        $where2['newid']=$newid;
        $res=$zyfn->where($where2)->select();
        if($res){
			$temparr=explode(",", $temp);
			$oldmarr=explode(",", $res[0]['material']);
			$resarr = array_merge($temparr,$oldmarr);
			$resarr = array_unique($resarr);
			$resarr = array_values($resarr);
            $tt=implode(',',$resarr);
            $zyfn->where('newid='.$newid)->save([
                'material' => $tt,
            ]);
        }else{
           $zyfn->data([
                'newid' => $newid,
                'material' => $temp,
                'fangan' => 'A',
                'numbers' => 0
            ]);
            $zyfn->add(); 
        }
    	
    	/*for($i=0;$i<$nums;$i++){
            if($temp==""){
                $temp=$result[$i]['name'];
            }else{
                $temp=$temp.",".$result[$i]['name'];
            }
    		
    		if(($i+1)%4==0){
    			$fnnums++;
    			array_push($material,$temp);
    			$temp="";
    		}
    		if($fnnums==4){
    			break;
    		}
    	}
    	if($temp!=""){
    		array_push($material,$temp);
    	}
        $j=0;
    	for($i=0;$i<count($material);$i++){
    		if($i<4){
    			$zyfn->data([
	    			'newid' => $newid,
	    			'material' => $material[$i],
                    'fangan' => $fangans[$i],
	    			'numbers' => 0
	    		]);
	    		$zyfn->add();
    		}
    		
    	}*/
    	exit();
    }
    public function getfangan(){
    	$id=$_GET['newid'];
    	$Zyfangan=M('Zyfangan');
        $where['newid']=$id;
    	$result=$Zyfangan->where($where)->select();
    	$data=array(
            "msg"=>"",
            "code"=>0,
            "data" =>$result,
            "count"=> count($result),
            "is"=> true,
            "tip"=>"操作成功！"
        );
        $this->ajaxReturn($data);
        exit();

    }
    public function details(){
        $food=$_GET['foodname'];
        $zym=M('Zymaterial');
        //$arrfood = explode(",", $food);
        $details=array();
        /*for($i=0;$i<count($arrfood);$i++){
            $result=$zym->where('name',$arrfood[$i])->select();
            if($result){
                array_push($details,$result[0]);
            }
        }*/
         $result=$zym->where('name="'.$food.'"')->select();
        if($result){
            array_push($details,$result[0]);
        }
        $data=array(
            "msg"=>"",
            "code"=>0,
            "data" =>$result,
            "count"=> count($result),
            "is"=> true,
            "tip"=>"操作成功！"
        );
        $this->ajaxReturn($data);
        exit();

    }
    public function toupiao()
    {
        # code...
        $fanganid=$_GET['fanganid'];
        $zyf=M('Zyfangan');
        $result=$zyf->where('id="'.$fanganid.'"')->select();
        $numbers=$result[0]['numbers'];
        $numbers=$numbers+1;
        $t=$zyf->where('id="'.$fanganid.'"')->save(['numbers' =>$numbers]);
        exit();
    }
    public function getuser(){
        $id=$_GET['id'];
        $zyb=M('Zybook');
        $result=$zyb->where('newid="'.$id.'"')->select();
        $arruser = explode(",", $result[0]['username']);
        $data=array(
            "msg"=>"",
            "code"=>0,
            "data" =>$arruser,
            "count"=> count($arruser),
            "is"=> true,
            "tip"=>"操作成功！"
        );
        $this->ajaxReturn($data);
        exit();
    }
    public function getbest()
    {
        # code...
        $newid=$_GET['newid'];
        $zyf=M('Zyfangan');
        $result=$zyf->where('newid="'.$newid.'"')->order('numbers desc')->select();
        $best=$result;
        $data=array(
            "msg"=>"",
            "code"=>0,
            "data" =>$best,
            "count"=> 1,
            "is"=> true,
            "tip"=>"操作成功！"
        );
        $this->ajaxReturn($data);
        exit();

    }
    public function join()
    {
    	# code...
    	$id=$_GET['id'];
    	$nickname=$_GET['nickname'];
    	$zyb=M('Zybook');
    	$result=$zyb->where('newid="'.$id.'"')->select();
    	$name=$result[0]['username'];
    	$newname=$name.",".$nickname;
    	$re=$zyb->where('newid="'.$id.'"')->save(['username'=>$newname]);
    	exit();
    }
}

?>
