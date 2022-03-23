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
             stats[level-1].bestTime+=change;
             
             break;
          case 4:
             stats[level-1].totalTime+=change;
             
             break;
             default:
             break;
       }
    localStorage.setItem('Analytics', JSON.stringify(stats));
 }

 export default changeAnalytics;

