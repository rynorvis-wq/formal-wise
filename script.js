const destination=document.getElementById('destination');
const otherWrap=document.getElementById('other-wrap');
const other=document.getElementById('other');
destination.addEventListener('change',()=>{
  const show=destination.value==='Other';
  otherWrap.classList.toggle('hidden',!show);
  other.required=show;
});
document.getElementById('year').textContent=new Date().getFullYear();
