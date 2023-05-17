import { useRouter } from "next/router"
import { useState } from "react"
import Image from 'next/image';
import { Box, Button, Input, Title} from '@mantine/core';
// import '@/styles/index.css'

export default function Home() {

const router = useRouter()


  return (

    <div >
      <Button color="dark" radius="xl" size="xs" compact style={{position: "absolute",left: "1001px", top: "644px",height: "25px"}} onClick={() => router.push("/SearchPageHome")}>
        首都圏
      </Button>



      
    </div>  

    );
};