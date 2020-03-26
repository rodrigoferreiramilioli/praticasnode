var data = [1,2,3,4,5,6,7];
/* for multiplicando todo o array por 2 */
for (i=0;i<data.length;i++){
   console.log(data[i]*2);
}

/* com map */
data.map((response) => console.log(response*2));
/* o map também aceita outros paramentros como index */
data.map((response,index) => console.log(index));