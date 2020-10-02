var speed=1000;
var wait=2;
var intTimeStep=20;
var isIe=(window.ActiveXObject)?true:false;
var intAlphaStep=(isIe)?5:0.05;
var curSObj=null;
var curOpacity=null;
function startObjVisible(objId)
{
	 curSObj=document.getElementById(objId);
		if(wait==0)
		{
	 setObjClose();
	 wait=2;
 }
		else
		{
			curSObj.style.display='';
			setObjOpen();
	 wait--;  
			setTimeout("startObjVisible('objDiv')",speed);
		}
}

function setObjOpen()
{
	if(isIe)
	{
	curSObj.filters.alpha.opacity+=intAlphaStep;
		 if (curSObj.filters.alpha.opacity<100)
	 {
			 setTimeout('setObjOpen()',intTimeStep);
	 }
	}
	else
	{ 
		 curOpacity+=intAlphaStep;
		 curSObj.style.opacity =curOpacity;
		 if (curOpacity<1) setTimeout('setObjOpen()',intTimeStep);
	}
}

function setObjClose()
{
	if(isIe)
	{
			curSObj.filters.alpha.opacity-=intAlphaStep;
			if (curSObj.filters.alpha.opacity>0)
				{
				 setTimeout('setObjClose()',intTimeStep);
				}
			else
		 {
	curSObj.style.display="none";
	}
	}
	else
	{
			 curOpacity-=intAlphaStep;
			 if (curOpacity>0)
			{
						curSObj.style.opacity =curOpacity;
						setTimeout('setObjClose()',intTimeStep);
			}
			 else
			{
				curSObj.style.display='none';
				 }
	 }
}