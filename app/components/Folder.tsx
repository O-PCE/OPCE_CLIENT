import { FolderIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import styles from '../styles.module.css'

interface FolderProps {
    link: string;
    css: string;
    name: string;
}

function Folder({ 
    link,
    css,
    name
}: FolderProps) {
    return (
        <Link href={ link }>
            <div className={`flex flex-col items-center ${styles['fixed-folder-size-div']}`}>
                <FolderIcon className={ css } />
                <span className="font-semibold">{ name }</span>
            </div>
        </Link>
    )
}

export default Folder;