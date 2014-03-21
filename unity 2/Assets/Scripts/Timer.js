var Timer = 0.0;

function Update ()
{
	Timer += Time.deltaTime;
	
	guiText.text = "Score: " + Timer;
}