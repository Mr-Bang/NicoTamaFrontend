import { useRouter } from "next/router"
import { useState } from "react"
import Image from 'next/image';
import { Box, Button, Input, Title} from '@mantine/core';
// import '@/styles/index.css'

export default function Home() {

const router = useRouter()
const [a, setA] = useState("unko")

  return (

    <div>
      <img src="/topbar.jpg" />  








      <div style={{ position: "absolute", width: "320px", height: "783px", left: "20px", top: "177px" }}>
        <Image
          alt="アイコン"
          src="/searchbox.jpg"
          layout="fill"
          objectposition="contain"
        />
      </div>

      <div style={{ position: "absolute",width: "1136px",height: "30px",left: "362px",top: "208px"}}>
        <img src="/searchfrommap.png" />
      </div>


      <div style={{ position: "absolute", width: "782px", height: "564px", left: "558px", top: "270px" }}>
        <img src="/searchmap.jpg" />
      </div>
      {/* <h1 onClick={() => router.push("/a")}>{a}</h1> */}
      <div >
        <Button color="dark" radius="xl" size="xs" compact style={{position: "absolute",left: "1001px", top: "644px",height: "25px"}} onClick={() => router.push("/a")}>
          首都圏
        </Button>
        <Button color="dark" radius="xl" size="xs" compact style={{position: "absolute",left: "1215px", top: "286px",height: "25px"}}>
          北海道
        </Button>
        <Button color="dark" radius="xl" size="xs" compact style={{position: "absolute",left: "1198px", top: "499px",height: "25px"}}>
          東北
        </Button>
        <Button color="dark" radius="xl" size="xs" compact style={{position: "absolute",left: "976px", top: "533px",height: "25px"}}>
          北陸
        </Button>
        <Button color="dark" radius="xl" size="xs" compact style={{position: "absolute",left: "1129px", top: "690px",height: "25px"}}>
          北関東
        </Button>
        <Button color="dark" radius="xl" size="xs" compact style={{position: "absolute",left: "940px", top: "682px",height: "25px"}}>
          伊豆・箱根
        </Button>
        <Button color="dark" radius="xl" size="xs" compact style={{position: "absolute",left: "904px", top: "614px",height: "25px"}}>
          甲信越
        </Button>
        <Button color="dark" radius="xl" size="xs" compact style={{position: "absolute",left: "887px", top: "652px",height: "25px"}}>
          東海
        </Button>
        <Button color="dark" radius="xl" size="xs" compact style={{position: "absolute",left: "829px", top: "587px",height: "25px"}}>
          近畿
        </Button>
        <Button color="dark" radius="xl" size="xs" compact style={{position: "absolute",left: "695px", top: "615px",height: "25px"}}>
          山陽・山陰
        </Button>
        <Button color="dark" radius="xl" size="xs" compact style={{position: "absolute",left: "725px", top: "717px",height: "25px"}}>
          四国
        </Button>
        <Button color="dark" radius="xl" size="xs" compact style={{position: "absolute",left: "543px", top: "555px",height: "25px"}}>
          九州
        </Button>
        <Button color="dark" radius="xl" size="xs" compact style={{position: "absolute",left: "605px", top: "788px",height: "25px"}}>
          沖縄
        </Button>

      </div>









      <div style={{ position: "absolute", width: "214px", height: "852px", left: "1521px", top: "155px" }}>
        <img src="/register.jpg" />
      </div>


      <div style={{ position: "absolute",width: "160px",right: "8px", top: "145px", bottom: "-6px" }}>
        <img src="/advertizements.png" />
      </div>

      <div style={{ position: "absolute",width: "1740px",height: "1967px",left: "12px",top: "1352px"}}>
        <img src="/advertizements2.png" />
      </div>

      <div style={{ position: "absolute", width: "1118px", height: "56px", left: "371px", top: "836px" }}>
        <img src="/kindoftravel.jpg" />
      </div>

      <div style={{ position: "absolute", left: "371px", top: "950px", width: "1126px", height: "137px" }}>
        <img src="/searchfromsomething.jpg" />
      </div>

      <div style={{ position: "absolute",width: "1720px",height: "220px",left: "0px",top: "1088px"}}>
        <img src="/advertizements3.jpg" />
      </div>

      <div style={{ position: "absolute", height: "2320.34px",left: "20px",top: "1352px", right: "1407.2px"}}>
        <img src="/advertizements4.jpg" />
      </div>



          


    </div>  
  
  
  
    );
};