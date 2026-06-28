const container = document.getElementById("array-container");
const button = document.getElementById("generate");
const bubbleButton = document.getElementById("bubble");
const selectButton = document.getElementById("selection");
const insertButton = document.getElementById("insertion");
const mergeButton = document.getElementById("merge");
const quickButton = document.getElementById("quick");
const allButtons = document.querySelectorAll("button");
let delay = 50;
speed.addEventListener("input", () => {delay =101- speed.value;});
let sizes = 20;
size.addEventListener("input", () => {sizes = size.value;generateArray();});
let values=[];
function disableButtons()
{
    allButtons.forEach(btn => {btn.disabled = true;});
}
function enableButtons()
{
    allButtons.forEach(btn => {btn.disabled = false;});
}
function generateArray(){
container.innerHTML = "";
values=[];
for(let i=0;i<sizes;i++)
{
const bar = document.createElement("div");
bar.classList.add("bar");
const height = Math.floor(Math.random() * 300) + 50;
values.push(height);
bar.style.height = height + "px";
container.appendChild(bar);
}
console.log(values);
}
button.addEventListener("click", generateArray);
generateArray();
function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function bubbleSort()
{
    disableButtons();
    const bars = document.querySelectorAll(".bar");
    for(let i = 0; i < values.length - 1; i++)
    {
    for(let j = 0; j < values.length -i- 1; j++)
    {
        bars[j].style.backgroundColor = "red";
        bars[j+1].style.backgroundColor = "red";
        if(values[j] > values[j + 1])
        {
            let temp = values[j];
            values[j] = values[j + 1];
            values[j + 1] = temp;
        }
        for(let i = 0; i < values.length; i++)
        {
            bars[i].style.height = values[i] + "px";
        }
     await sleep(delay);
     bars[j].style.backgroundColor = "rgb(21, 255, 0)";
     bars[j+1].style.backgroundColor = "rgb(21, 255, 0)";
    }
    
}
  for(let k=0;k<bars.length;k++)
{
    bars[k].style.backgroundColor = "rgb(0, 102, 255)";
    await sleep(40);
}
    console.log(values);
    enableButtons();
}
bubbleButton.addEventListener("click", bubbleSort);
async function selectionSort() {
    disableButtons();
    const bars = document.querySelectorAll(".bar");
    for(let i=0;i<values.length-1;i++)
    {
        let minv=i;
        bars[i].style.backgroundColor = "red";
       
        for(let j=i+1;j<values.length;j++)
        {
            if(values[j]<values[minv])
            {
                bars[minv].style.backgroundColor = "rgb(21, 255, 0)";
                minv=j;
                bars[minv].style.backgroundColor = "red";
       }
                    await sleep(delay);
        }
           if(minv!=i)
       {
        let temp=values[minv];
        values[minv]=values[i];
        values[i]=temp;
       }
         for(let k = 0; k < values.length; k++)
        {
            bars[k].style.height = values[k] + "px";
        }
        bars[minv].style.backgroundColor = "rgb(21, 255, 0)";
        
    }
  for(let k=0;k<bars.length;k++)
{
    bars[k].style.backgroundColor = "rgb(0, 102, 255)";
    await sleep(40);
}
   enableButtons();
}
selectButton.addEventListener("click", selectionSort);
async function insertionsort() {
    disableButtons();
    const bars = document.querySelectorAll(".bar");
    for(let i=1;i<values.length;i++)
    {
        let key=values[i];
        let j=i-1;
        bars[i].style.backgroundColor = "red";
        while(j>=0 && values[j]>key)
        {
            values[j+1]=values[j];
              for(let k = 0; k < values.length; k++)
        {
            bars[k].style.height = values[k] + "px";
        }
        await sleep(delay);
            j--;
        }
        values[j+1]=key;
        for(let k = 0; k < values.length; k++)
            {
                bars[k].style.height = values[k] + "px";
            }
        bars[i].style.backgroundColor = "rgb(21, 255, 0)";
    }
    for(let k=0;k<bars.length;k++)
{
    bars[k].style.backgroundColor = "rgb(0, 102, 255)";
    await sleep(40);
}
    enableButtons();
}
insertButton.addEventListener("click", insertionsort);
async function mergeSort(left, right)
{
    const bars = document.querySelectorAll(".bar");
    if(left >= right)
        return;
    let mid = Math.floor((left + right) / 2);
    await mergeSort(left, mid);
    await mergeSort(mid + 1, right);
    let temp=[];
    let i=left;
    let j=mid+1;
    while(i <= mid && j <= right)
{
    if(values[i] <= values[j])
    {
        temp.push(values[i]);
        i++;
    }
    else
    {
        temp.push(values[j]);
        j++;
    }
}
     while(i <= mid)
{
    temp.push(values[i]);
    i++;
}
while(j <= right)
{
    temp.push(values[j]);
    j++;
}
for(let k = 0; k < temp.length; k++)
{
    bars[left + k].style.backgroundColor = "red";   
    values[left + k] = temp[k];
    bars[left + k].style.height = values[left + k] + "px";
    await sleep(delay);
    bars[left + k].style.backgroundColor = "rgb(21, 255, 0)";
}
}
async function startMergeSort()
{
    disableButtons();
    await mergeSort(0, values.length - 1);
    const bars = document.querySelectorAll(".bar");
    for(let k=0;k<bars.length;k++)
    {
        bars[k].style.backgroundColor = "rgb(0, 102, 255)";
        await sleep(40);
    }
    enableButtons();
}
mergeButton.addEventListener("click", startMergeSort);
async function quickSort(low, high)
{
    if(low < high)
    {
        let pi = await partition(low, high);
        await quickSort(low, pi - 1);
        await quickSort(pi + 1, high);
    }
 
}
async function partition(low,high)
{
    const bars = document.querySelectorAll(".bar");
       let pivot = values[high];
       bars[high].style.backgroundColor = "red";
    let i = low - 1;
    for(let j=low;j<high;j++)
    {
        if(values[j]<=pivot)
        {
            i++;
            let temp=values[i];
            values[i]=values[j];
            values[j]=temp;
            for(let k = 0; k < values.length; k++)
            {
                bars[k].style.height = values[k] + "px";
            }
            await sleep(delay);
        }
    }
    let temp=values[i+1];
         values[i+1]=values[high];
         values[high]=temp;
    for(let k = 0; k < values.length; k++)
            {
                bars[k].style.height = values[k] + "px";
            }
            await sleep(delay);
            bars[high].style.backgroundColor = "rgb(21,255,0)";
    return i + 1;
}
async function startQuickSort()
{
    disableButtons();
    await quickSort(0, values.length - 1);
    const bars = document.querySelectorAll(".bar");
    for(let k=0;k<bars.length;k++)
    {
        bars[k].style.backgroundColor = "rgb(0, 102, 255)";
        await sleep(40);
    }
    enableButtons();
}
quickButton.addEventListener("click", startQuickSort);