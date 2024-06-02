import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

function ProjectItem({img, titles}){
    return(
        <div className="mt-5 relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
            <img src={img} alt={titles} className="rounded-xl group-hover:opacity-10" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="flex flex-col text-sm font-bold text-white tracking-wider text-center sm:text-2xl">
                    {titles}
                    <div className="flex gap-3 justify-center p-3">
                    <FaGithub className="hover:cursor-pointer"/>
                    <FaExternalLinkAlt className="hover:cursor-pointer"/>
                    </div>
                </h3>
            </div>
        </div>
    )

}


export default ProjectItem