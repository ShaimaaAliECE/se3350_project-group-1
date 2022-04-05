function changeAnalytics(level,column,change){

    //retreive the analytics string
       let statsString=localStorage.getItem('Analytics');
       //convert to json
       let stats=JSON.parse(statsString);
      
       switch(column)
       {
          case 1:
             stats[level-1].attempts+=change;
             
             break;
          case 2:
             stats[level-1].timesComplete+=change;
             
             break;
          case 3:
            let tempBest = ("0" + Math.trunc(change / 60)).slice(-2) +
            ":" + ("0" + (change % 60)).slice(-2);
            let previous;
             if(stats[level-1].bestTime == '00:00')
             {
                stats[level-1].bestTime = tempBest;
                previous = change;
             }
             else if (previous > change)
             {
                stats[level-1].bestTime = tempBest;
                previous = change;
             }            
             break;
          case 4:
             let tempChange = ("0" + Math.trunc(change / 60)).slice(-2) +
             ":" + ("0" + (change % 60)).slice(-2);
             stats[level-1].totalTime = tempChange;
             
             break;
             default:
             break;
       }
    localStorage.setItem('Analytics', JSON.stringify(stats));
 }

 export default changeAnalytics;

