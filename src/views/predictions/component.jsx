import React from "react";

import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
const convertor01 = (data01)=>{
  let data =  data01.map((subarray,idx)=>{
        return {
            year:subarray[0],
            pastData:subarray[1]
        }
    });
    return data;
}
const convertor02 = (data02)=>{
    let data =  data02.map((subarray,idx)=>{
          return {
              year:subarray[0],
              predicted:subarray[1]
          }
      });
      return data;
  }
const Bajra = (props) => {
    const data = [
        {
            year: 2001, pastData:2509800.0 
        },
        {
            year: 2002, pastData:1800328.0 
        },
        {
            year: 2003, pastData:1300764.0
        },
        {
            year: 2004, pastData:2046659.0
        },
        {
            year: 2005, pastData:3819783.0 
        },
        {
            year: 2006, pastData:717945.0
        },
        {
            year: 2007, pastData:6669825.0
        },
        {
            year: 2008, pastData:3011054.0
        },
        {
            year: 2009, pastData:2168332.0
        },
        {
            year: 2010, pastData:3440400.0 
        },
        {
            year: 2011, pastData:4240852.0
        },
        {
            year: 2012, pastData:4293938.0 
        },
        {
            year: 2013, pastData:2034875.0
        },
        {
            year: 2014, pastData:6117800.0 
        },
        {
            year: 2015, predicted:5722633.499195579 
        },
        {
            year: 2016, predicted:6378930.632102411
        },
        {
            year: 2017, predicted:5295071.465819154 
        },
        {
            year: 2018, predicted:7914095.708879922
        },
        {
            year: 2019, predicted:5512558.130130243
        },
        {
            year: 2020, predicted:5525699.463653944
        },
        {
            year: 2021, predicted:5771605.609908845
        },
    ]
    return (
        <ResponsiveContainer>
            <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend iconType="wye" />
                <Line type="monotone" dataKey="pastData" stroke="#8884d8" />
                <Line type="monotone" dataKey="predicted" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
}
const Barley = (props)=>{
    const data = [
        {
            year: 2001, pastData:502300.0
        },
        {
            year: 2002, pastData:426352.0 
        },
        {
            year: 2003, pastData:365249.0
        },
        {
            year: 2004, pastData:408688.0
        },
        {
            year: 2005, pastData:446645.0
        },
        {
            year: 2006, pastData:447087.0
        },
        {
            year: 2007, pastData:408791.0
        },
        {
            year: 2008, pastData:416445.0
        },
        {
            year: 2009, pastData:457997.0
        },
        {
            year: 2010, pastData:591582.0
        },
        {
            year: 2011, pastData:538982.0
        },
        {
            year: 2012, pastData:878382.0
        },
        {
            year: 2013, pastData:619766.0
        },
        {
            year: 2014, pastData:934651.0
        },
        {
            year: 2015, predicted:1111353.4189847112
        },
        {
            year: 2016, predicted:570035.4646688178
        },
        {
            year: 2017, predicted:731652.5800231323
        },
        {
            year: 2018, predicted:465110.4085942507
        },
        {
            year: 2019, predicted:1094023.3100273162
        },
        {
            year: 2020, predicted:858615.9623855129
        },
        {
            year: 2021, predicted:907319.6857239604
        },
    ]
    return (
        <ResponsiveContainer>
            <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend iconType="wye" />
                <Line type="monotone" dataKey="pastData" stroke="#8884d8" />
                <Line type="monotone" dataKey="predicted" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
}
const Jowar = (props)=>{
    const data = [
        {
            year: 2001, pastData:267300.0
        },
        {
            year: 2002, pastData:153760.0
        },
        {
            year: 2003, pastData:173226.0
        },
        {
            year: 2004, pastData:134525.0
        },
        {
            year: 2005, pastData:254398.0
        },
        {
            year: 2006, pastData:68484.0
        },
        {
            year: 2007, pastData:527422.0
        },
        {
            year: 2008, pastData:263900.0
        },
        {
            year: 2009, pastData:169732.0
        },
        {
            year: 2010, pastData:367816.0
        },
        {
            year: 2011, pastData:392653.0
        },
        {
            year: 2012, pastData:333003.0
        },
        {
            year: 2013, pastData:104192.0
        },
        {
            year: 2014, pastData:508877.0
        },
        {
            year: 2015, predicted:206795.57978069037
        },
        {
            year: 2016, predicted:384619.3647217192
        },
        {
            year: 2017, predicted:410341.69666994736
        },
        {
            year: 2018, predicted:587480.1006649584
        },
        {
            year: 2019, predicted:525369.1509285476
        },
        {
            year: 2020, predicted:278745.0832621213
        },
        {
            year: 2021, predicted:389496.63209959306
        },
    ]
    return (
        <ResponsiveContainer>
            <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend iconType="wye" />
                <Line type="monotone" dataKey="pastData" stroke="#8884d8" />
                <Line type="monotone" dataKey="predicted" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
}
const Maize = (props)=>{
   let data01 = convertor01([
    [2001.0, 1222300.0],
    [2002.0, 1022458.0],
    [2003.0, 968657.0],
    [2004.0, 1015326.0],
    [2005.0, 1478871.0],
    [2006.0, 870264.0],
    [2007.0, 2069387.0],
    [2008.0, 1265243.0],
    [2009.0, 1103841.0],
    [2010.0, 1117941.0],
    [2011.0, 1961513.0],
    [2012.0, 1831110.0],
    [2013.0, 1144716.0],
    [2014.0, 2061424.0]
]);
let data02 = convertor02([
    [2015.0, 1173922.543967083],
    [2016.0, 1456452.2483345792],
    [2017.0, 1329462.1599015817],
    [2018.0, 1492480.5539130792],
    [2019.0, 1935372.1955685988],
    [2020.0, 1210727.0183506906],
    [2021.0, 1965129.3246142864]
]);
let data = data01.concat(data02);
    return (
        <ResponsiveContainer>
            <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend iconType="wye" />
                <Line type="monotone" dataKey="pastData" stroke="#8884d8" />
                <Line type="monotone" dataKey="predicted" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
}
const Wheat = (props)=>{
    let data01 = convertor01([
        [2001.0, 6701000.0],
        [2002.0, 6879818.0],
        [2003.0, 6731932.0],
        [2004.0, 5547100.0],
        [2005.0, 6389030.0],
        [2006.0, 4878020.0],
        [2007.0, 5875862.0],
        [2008.0, 5706871.0],
        [2009.0, 5865293.0],
        [2010.0, 7755883.0],
        [2011.0, 7126040.0],
        [2012.0, 7287074.0],
        [2013.0, 7500851.0],
        [2014.0, 10424350.0]
    ]);
 let data02 = convertor02([
    [2015.0, 9832933.074089825],
    [2016.0, 10015850.619470537],
    [2017.0, 11407275.537572145],
    [2018.0, 11250989.597190678],
    [2019.0, 11095146.77871126],
    [2020.0, 12217805.602549672],
    [2021.0, 12739530.989137053]
]);
 let data = data01.concat(data02);
     return (
         <ResponsiveContainer>
             <LineChart width={730} height={250} data={data}
                 margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                 <CartesianGrid strokeDasharray="3 3" />
                 <XAxis dataKey="year" />
                 <YAxis />
                 <Tooltip />
                 <Legend iconType="wye" />
                 <Line type="monotone" dataKey="pastData" stroke="#8884d8" />
                 <Line type="monotone" dataKey="predicted" stroke="#82ca9d" />
             </LineChart>
         </ResponsiveContainer>
     );
 }
export  {Bajra,Barley,Jowar,Maize,Wheat};