import CloseIcon from '@mui/icons-material/Close';
function ContactForm({contact}){

    return(
        <div className="bg-white p-[32px] w-[342px] rounded-[24px] flex flex-col gap-[20px] items-center fixed left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
<div className='flex justify-end pr-0 w-full mt-[-10px]'>
<CloseIcon onClick={()=>{contact(false)}}/>
</div>
<div className='flex flex-col'>
    <h1 className='card-title'>Contact us</h1>
    <p className='card-subtext'>Please feel free to write us a message if you want to know more:</p>
</div>
<div className='border-[1px] pl-2 border-[#CACAD2] rounded-[12px] w-[300px] flex flex-col'>
    <p>Your email</p>
    <input type='text' defaultValue={"Example@mail.com"} className='outline-none text-black font-bold border-none rounded-[12px]'></input>
</div>
<div className='border-[1px] pl-2 border-[#CACAD2] rounded-[12px] w-[300px] flex flex-col'>
    <p>Your email</p>
    <input type='text' defaultValue={"Michael Robinson"} className='outline-none text-black font-bold border-none rounded-[12px]'></input>
</div>
<div className='border-[1px] border-[#CACAD2] rounded-[12px] w-[300px] flex flex-col'>
    <p className='pl-2'>Your name</p>
    <textarea defaultValue={"Write me back, I am interested AF!"} className='outline-none pl-2 text-black font-bold border-none rounded-[12px]'></textarea>
</div>
<div className='flex justify-start w-full'>
    <button className='w-[149px] h-[52px] bg-black text-white rounded-[16px] p-[13px]'>Send message</button>
</div>
        </div>
    )
}
export default ContactForm