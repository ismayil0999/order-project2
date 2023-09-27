function AlertBox({agree}){
    return(
<div class="w-[30%] flex gap-[10px] max-[1280px]:w-[60%] max-[400px]:flex-col max-[400px]:w-[98%] max-[400px]:right-0 max-[665px]:h-auto max-[644px]:w-[80%] h-[300px] rounded-[60px] p-[30px] box-alert fixed bottom-3 right-8">
<img src="../cookie.png" className="w-[60px] h-[60px]"></img>
<div className="flex flex-col gap-[10px] justify-between">
    <h1 className="max-[480px]:text-[14px]">We use cookies on our site to ensure and enhance its functionality. With your permission, we would like to set cookies to help us analyze traffic. You can withdraw your consent anytime. For more information, please read our Privacy Policy.</h1>
<button onClick={()=>{agree(false)}} className="rounded-[30px] bg-black text-white p-[15px] max-[480px]:h-[14px] flex items-center justify-center">Agree</button>
</div>
</div>
    )
}
export default AlertBox