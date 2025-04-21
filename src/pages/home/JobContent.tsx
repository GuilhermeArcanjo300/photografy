import JobImageMain from '../../../public/img/jobs/job-1.jpg' 
import JobImage1 from '../../../public/img/jobs/job-2.jpg' 
import JobImage2 from '../../../public/img/jobs/job-3.jpg' 
import JobImage3 from '../../../public/img/jobs/job-4.jpg' 

export const JobContent = () => {
    return (
        <div className="">
            <BoxContent>
                <img src={JobImageMain} alt="Job" className="w-[60%]" />
                <p className='text-center text-[36px] m-auto'>Especialidade em<br/>Newborn</p>
            </BoxContent>
            <BoxContent>
                <p className='text-center text-[36px]'>Demais ensaios</p>
                <JobDetails 
                    image={JobImage1}
                    title='Gestante'
                />
                <JobDetails 
                    image={JobImage2}
                    title='Acompanhamento'
                />
                <JobDetails 
                    image={JobImage3}
                    title='Diversos'
                />
            </BoxContent>
        </div>
    )
}

const BoxContent = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='flex items-center justify-between h-screen mx-[5%]'>
            {children}
        </div>
    )
}

const JobDetails = ({title, image}: {title: string, image: string}) => {
    return (
        <div className='relative group cursor-pointer'>
            <img src={image} alt="Job" className="w-[20vw]" />
            <div className='group-hover:flex hidden absolute bg-[#F88F87CC] w-full h-full top-0 left-0 justify-center items-center text-[24px] text-white'>
                <p>{title}</p>
            </div>
        </div>
    )
}