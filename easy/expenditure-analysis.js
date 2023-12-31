/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  
  let ans=new Array();
  for(let i=0;i<transactions.length;i++){

    const index = ans.findIndex(item => item.category === transactions[i].category);
    // console.log(index);
      if(index!=-1){
        ans[index].totalSpent+=transactions[i].price;
      }
      else{
      ans.push({
            category:transactions[i].category,
            totalSpent:transactions[i].price
            });
          }
    }
    return ans;
    

}

module.exports = calculateTotalSpentByCategory;
