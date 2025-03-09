function minDate(s) {
  //write you code here
  let mini = s[0]; 
  for(let i =1 ; i<s.length ; i++){
	  let s1 = s[i].substring(0,4);
	  if(Number(s1)<Number(mini.substring(0,4))){
		  mini = s[i];
	  }
	  else if(Number(s1) === Number(mini.substring(0,4))){
		  let s2 = s[i].substring(5,2);
		  if(Number(s2)<Number(mini.substring(5,2))){
			  mini = s[i];
		  }
		  else if(Number(s2)===Number(mini.substring(5,2))){
			  let s3 = s[i].substring(8,2);
			  if(Number(s3)<Number(mini.substring(8,2))){
				  mini = s[i];
			  }
		  }
	  }
  }
	return mini;
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];

alert(minDate(dates));
