// src/components/intro/SupportMap.js

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { OpenLayers, HeatMap } from '@stickyboard/openlayers';
import IntroSection from './IntroSection';
import IntroTab from './IntroTab';

export const MAP = 0;
export const HEAT_MAP = 1;

const pointList = [
    { geometry: [117.2264, 31.8257], weight: 1 },
    { geometry: [116.4142, 40.1824], weight: 1 },
    { geometry: [107.874, 30.0572], weight: 1 },
    { geometry: [117.9874, 26.0789], weight: 1 },
    { geometry: [103.8343, 36.0611], weight: 1 },
    { geometry: [113.4244, 23.3417], weight: 1 },
    { geometry: [108.7881, 23.8298], weight: 1 },
    { geometry: [106.8748, 26.8154], weight: 1 },
    { geometry: [109.7453, 19.1959], weight: 1 },
    { geometry: [114.5149, 38.0428], weight: 1 },
    { geometry: [127.7615, 47.862], weight: 1 },
    { geometry: [113.614, 33.88202], weight: 1 },
    { geometry: [112.2707, 30.9756], weight: 1 },
    { geometry: [111.7088, 27.6104], weight: 1 },
    { geometry: [113.9448, 44.0935], weight: 1 },
    { geometry: [119.455, 32.9711], weight: 1 },
    { geometry: [115.7221, 27.614], weight: 1 },
    { geometry: [126.1923, 43.6661], weight: 1 },
    { geometry: [122.6085, 41.2956], weight: 1 },
    { geometry: [106.1655, 37.2692], weight: 1 },
    { geometry: [95.9956, 35.7452], weight: 0.9 },
    { geometry: [108.8701, 35.1917], weight: 1 },
    { geometry: [118.1498, 36.3427], weight: 1 },
    { geometry: [121.4491, 31.202], weight: 1 },
    { geometry: [112.2922, 37.5777], weight: 1 },
    { geometry: [102.7103, 30.6171], weight: 1 },
    { geometry: [117.323, 39.3054], weight: 1 },
    { geometry: [88.0924, 31.6927], weight: 0.05 },
    { geometry: [85.2401, 41.1129], weight: 1 },
    { geometry: [101.487, 24.974], weight: 1 },
    { geometry: [120.0934, 29.1832], weight: 1 },
    { geometry: [101, 15], weight: 1 },
    { geometry: [138, 36], weight: 1 },
    { geometry: [128, 36], weight: 1 },
    { geometry: [121, 23.7], weight: 1 },
    { geometry: [-122.3321, 47.6062], weight: 1 },
    { geometry: [-87.6976, 41.7377], weight: 0.35 },
    { geometry: [113.55, 22.1667], weight: 0.5 },
    { geometry: [114.2, 22.3], weight: 1 },
    { geometry: [103.8333, 1.2833], weight: 1 },
    { geometry: [108, 16], weight: 1 },
    { geometry: [2, 47], weight: 1 },
    { geometry: [84.25, 28.1667], weight: 0.05 },
    { geometry: [112.5, 2.5], weight: 1 },
    { geometry: [-79.3832, 43.6532], weight: 1 },
    { geometry: [-123.1207, 49.2827], weight: 1 },
    { geometry: [-118.2437, 34.0522], weight: 0.7 },
    { geometry: [151.2093, -33.8688], weight: 1 },
    { geometry: [144.9631, -37.8136], weight: 0.55 },
    { geometry: [153.4, -28.0167], weight: 0.75 },
    { geometry: [104.9167, 11.55], weight: 0.1 },
    { geometry: [81, 7], weight: 0.05 },
    { geometry: [9, 51], weight: 1 },
    { geometry: [26, 64], weight: 1 },
    { geometry: [54, 24], weight: 1 },
    { geometry: [122, 13], weight: 0.5 },
    { geometry: [78, 21], weight: 1 },
    { geometry: [-81.2453, 42.9849], weight: 0.05 },
    { geometry: [12, 43], weight: 1 },
    { geometry: [-3, 55], weight: 1 },
    { geometry: [90, 60], weight: 0.85 },
    { geometry: [16, 63], weight: 1 },
    { geometry: [-4, 40], weight: 1 },
    { geometry: [138.6007, -34.9285], weight: 0.35 },
    { geometry: [-120.9876, 36.5761], weight: 0.1 },
    { geometry: [4, 50.8333], weight: 1 },
    { geometry: [-89.4012, 43.0731], weight: 0.05 },
    { geometry: [139.638, 35.4437], weight: 1 },
    { geometry: [-117.1611, 32.7157], weight: 0.15 },
    { geometry: [-98.4936, 29.4241], weight: 0.05 },
    { geometry: [30, 26], weight: 1 },
    { geometry: [53, 32], weight: 1 },
    { geometry: [-95.9758, 41.2545], weight: 0 },
    { geometry: [-121.9399, 38.2721], weight: 0 },
    { geometry: [139.638, 35.4437], weight: 0 },
    { geometry: [-98.6134, 29.3829], weight: 0 },
    { geometry: [35.8623, 33.8547], weight: 1 },
    { geometry: [-123.8695, 40.745], weight: 0.05 },
    { geometry: [-121.3542, 38.4747], weight: 0.1 },
    { geometry: [44, 33], weight: 1 },
    { geometry: [139.638, 35.4437], weight: 1 },
    { geometry: [57, 21], weight: 0.8 },
    { geometry: [65, 33], weight: 0.2 },
    { geometry: [50.55, 26.0275], weight: 1 },
    { geometry: [47.75, 29.5], weight: 1 },
    { geometry: [1.6596, 28.0339], weight: 0.95 },
    { geometry: [15.2, 45.1], weight: 0.6 },
    { geometry: [8.2275, 46.8182], weight: 1 },
    { geometry: [14.5501, 47.5162], weight: 1 },
    { geometry: [35, 31], weight: 1 },
    { geometry: [69.3451, 30.3753], weight: 0.3 },
    { geometry: [-51.9253, -14.235], weight: 1 },
    { geometry: [43.3569, 42.3154], weight: 0.65 },
    { geometry: [21.8243, 39.0742], weight: 1 },
    { geometry: [21.7453, 41.6086], weight: 0.15 },
    { geometry: [8.4689, 60.472], weight: 1 },
    { geometry: [24.9668, 45.9432], weight: 0.75 },
    { geometry: [9.5018, 56.2639], weight: 1 },
    { geometry: [25.0136, 58.5953], weight: 0.5 },
    { geometry: [5.2913, 52.1326], weight: 1 },
    { geometry: [12.4578, 43.9424], weight: 1 },
    { geometry: [27.9534, 53.7098], weight: 0.3 },
    { geometry: [-73.5673, 45.5017], weight: 0.2 },
    { geometry: [-19.0208, 64.9631], weight: 1 },
    { geometry: [23.8813, 55.1694], weight: 0.05 },
    { geometry: [-102.5528, 23.6345], weight: 0.35 },
    { geometry: [174.886, -40.9006], weight: 0.25 },
    { geometry: [8.6753, 9.082], weight: 0.05 },
    { geometry: [115.8605, -31.9505], weight: 0.15 },
    { geometry: [-7.6921, 53.1424], weight: 0.95 },
    { geometry: [6.1296, 49.8153], weight: 0.15 },
    { geometry: [7.4167, 43.7333], weight: 0.05 },
    { geometry: [51.1839, 25.3548], weight: 0.75 },
    { geometry: [-121.8339, 48.033], weight: 1 },
    { geometry: [-78.1834, -1.8312], weight: 0.7 },
    { geometry: [47.5769, 40.1431], weight: 0.45 },
    { geometry: [15.473, 49.8175], weight: 1 },
    { geometry: [45.0382, 40.0691], weight: 0.05 },
    { geometry: [-70.1627, 18.7357], weight: 0.25 },
    { geometry: [113.9213, -0.7893], weight: 0.3 },
    { geometry: [-8.2245, 39.3999], weight: 1 },
    { geometry: [1.5218, 42.5063], weight: 0.05 },
    { geometry: [145.9707, -41.4545], weight: 0.1 },
    { geometry: [24.6032, 56.8796], weight: 0.1 },
    { geometry: [-7.0926, 31.7917], weight: 0.1 },
    { geometry: [45, 24], weight: 0.55 },
    { geometry: [-14.4524, 14.4974], weight: 0.2 },
    { geometry: [-71.826, 43.9088], weight: 0.2 },
    { geometry: [-82.3018, 27.9904], weight: 0.1 },
    { geometry: [-120.8039, 39.0916], weight: 0.25 },
    { geometry: [-122.3255, 37.563], weight: 0.1 },
    { geometry: [-82.5307, 27.3364], weight: 0.05 },
    { geometry: [-122.9888, 38.578], weight: 0.05 },
    { geometry: [-118.7606, 45.775], weight: 0.05 },
    { geometry: [-84.3963, 33.8034], weight: 0.15 },
    { geometry: [-123.1386, 45.547], weight: 0.4 },
    { geometry: [-63.6167, -38.4161], weight: 0.6 },
    { geometry: [-71.543, -35.6751], weight: 0.4 },
    { geometry: [36.51, 31.24], weight: 0.05 },
    { geometry: [-71.1449, 42.1767], weight: 0.3 },
    { geometry: [-112.4291, 33.2918], weight: 0.15 },
    { geometry: [-78.5661, 35.8032], weight: 0.05 },
    { geometry: [-73.7949, 41.122], weight: 1 },
    { geometry: [31.1656, 48.3794], weight: 0.05 },
    { geometry: [-62.8333, 17.9], weight: 0.15 },
    { geometry: [-117.8531, 33.7879], weight: 0.15 },
    { geometry: [19.5033, 47.1625], weight: 0.35 },
    { geometry: [130.8456, -12.4634], weight: 0 },
    { geometry: [-6.9118, 61.8926], weight: 0.1 },
    { geometry: [-5.3536, 36.1408], weight: 0.05 },
    { geometry: [9.55, 47.14], weight: 0.05 },
    { geometry: [19.1451, 51.9194], weight: 0.55 },
    { geometry: [9, 34], weight: 0.1 },
    { geometry: [-121.9018, 37.8534], weight: 0.6 },
    { geometry: [35.2332, 31.9522], weight: 1 },
    { geometry: [17.6791, 43.9159], weight: 0.15 },
    { geometry: [14.9955, 46.1512], weight: 0.8 },
    { geometry: [-74.077, 40.9263], weight: 0.2 },
    { geometry: [-95.3103, 29.7752], weight: 0.25 },
    { geometry: [-122.4194, 37.7749], weight: 0.45 },
    { geometry: [22.9375, -30.5595], weight: 0.15 },
    { geometry: [-115.094, 36.0796], weight: 0.1 },
    { geometry: [-95.8143, 29.5693], weight: 0.3 },
    { geometry: [-119.3732, 47.1981], weight: 0.05 },
    { geometry: [-86.9824, 30.769], weight: 0.05 },
    { geometry: [-86.8622, 35.9179], weight: 0.05 },
    { geometry: [-74.006, 40.7128], weight: 0.6 },
    { geometry: [-120.7401, 47.7511], weight: 0.25 },
    { geometry: [-77.2405, 39.1547], weight: 0.2 },
    { geometry: [-71.0589, 42.3601], weight: 0.4 },
    { geometry: [-104.9903, 39.7392], weight: 0.1 },
    { geometry: [-106.064, 39.5912], weight: 0.1 },
    { geometry: [90.4336, 27.5142], weight: 0.05 },
    { geometry: [11.5021, 3.848], weight: 0.1 },
    { geometry: [-114.0719, 51.0447], weight: 0.05 },
    { geometry: [-74.2973, 4.5709], weight: 0.05 },
    { geometry: [-83.7534, 9.7489], weight: 0.25 },
    { geometry: [-75.0152, -9.19], weight: 0.3 },
    { geometry: [21.0059, 44.0165], weight: 0.05 },
    { geometry: [19.699, 48.669], weight: 0.15 },
    { geometry: [0.8248, 8.6195], weight: 0.05 },
    { geometry: [-79.1781, 35.7211], weight: 0.05 },
    { geometry: [-75.3879, 39.9078], weight: 0.05 },
    { geometry: [-96.1951, 41.3148], weight: 0.05 },
    { geometry: [-84.4803, 38.0606], weight: 0.05 },
    { geometry: [-86.1752, 39.8362], weight: 0.05 },
    { geometry: [-71.2874, 42.4672], weight: 0.35 },
    { geometry: [-73.5594, 40.6546], weight: 0.25 },
    { geometry: [-93.0616, 44.9964], weight: 0.05 },
    { geometry: [-119.6035, 40.5608], weight: 0.1 },
    { geometry: [-75.2479, 41.6739], weight: 0.05 },
    { geometry: [-121.9018, 38.7646], weight: 0.05 },
    { geometry: [12.4534, 41.9029], weight: 0.05 },
    { geometry: [-121.9552, 37.3541], weight: 1 },
    { geometry: [-122.6655, 37.6489], weight: 1 },
    { geometry: [-53.1258, 3.9339], weight: 0.25 },
    { geometry: [14.3754, 35.9375], weight: 0.15 },
    { geometry: [-104.9389, 39.2587], weight: 0.15 },
    { geometry: [-71.4774, 41.8882], weight: 0.15 },
    { geometry: [-61.0242, 14.6415], weight: 0.1 },
    { geometry: [-121.7195, 37.6017], weight: 0.1 },
    { geometry: [-80.3659, 26.1901], weight: 0.1 },
    { geometry: [-73.3709, 41.256], weight: 0.05 },
    { geometry: [-81.9535, 26.663], weight: 0.1 },
    { geometry: [-111.2845, 32.8162], weight: 0.1 },
    { geometry: [-73.983, 41.1489], weight: 0.1 },
    { geometry: [-73.936, 43.0324], weight: 0.1 },
    { geometry: [-113.4938, 53.5461], weight: 0.15 },
    { geometry: [-79.7848, 32.7957], weight: 0.05 },
    { geometry: [-122.5194, 45.7466], weight: 0.05 },
    { geometry: [-84.5641, 33.8999], weight: 0.05 },
    { geometry: [-112.0953, 40.9629], weight: 0.05 },
    { geometry: [-104.4723, 38.9108], weight: 0.05 },
    { geometry: [-157.8584, 21.307], weight: 0.05 },
    { geometry: [-122.7647, 42.3345], weight: 0.1 },
    { geometry: [-123.304, 47.7425], weight: 0.05 },
    { geometry: [-80.5883, 34.3672], weight: 0.05 },
    { geometry: [-121.6142, 42.6953], weight: 0.05 },
    { geometry: [-119.6963, 37.2519], weight: 0.05 },
    { geometry: [-122.1295, 47.0676], weight: 0.2 },
    { geometry: [-70.7928, 42.1615], weight: 0.05 },
    { geometry: [-95.941, 36.1593], weight: 0.05 },
    { geometry: [-95.4778, 30.3213], weight: 0 },
    { geometry: [-7.6921, 53.1424], weight: 1 },
    { geometry: [25.4858, 42.7339], weight: 0.2 },
    { geometry: [73.2207, 3.2028], weight: 0.2 },
    { geometry: [-75.3879, 40.229], weight: 0.2 },
    { geometry: [90.3563, 23.685], weight: 0.15 },
    { geometry: [-77.2405, 38.9085], weight: 0.1 },
    { geometry: [-71.0498, 42.9931], weight: 0.1 },
    { geometry: [-77.0369, 38.9072], weight: null },
    { geometry: [28.3699, 47.4116], weight: 0.05 },
    { geometry: [-58.4438, -23.4425], weight: 0.05 },
    { geometry: [-73.1822, 42.3118], weight: 0.05 },
    { geometry: [-86.822, 36.1343], weight: 0.05 },
    { geometry: [-123.2492, 43.1261], weight: 0.05 },
    { geometry: [-119.2321, 36.9859], weight: 0.05 },
    { geometry: [-76.3637, 39.5839], weight: 0.05 },
    { geometry: [-86.5401, 39.8065], weight: 0.05 },
    { geometry: [-74.0535, 40.7453], weight: 0.05 },
    { geometry: [-94.8521, 38.8454], weight: 0.05 },
    { geometry: [-120.9319, 47.175], weight: 0.05 },
    { geometry: [-82.3452, 27.4799], weight: 0.05 },
    { geometry: [-122.5927, 44.8446], weight: 0.05 },
    { geometry: [-86.6611, 30.5773], weight: 0.05 },
    { geometry: [-85.1479, 34.0132], weight: 0.1 },
    { geometry: [-117.3961, 33.9533], weight: 0.05 },
    { geometry: [-89.9253, 35.1269], weight: 0.05 },
    { geometry: [-117.4225, 47.6587], weight: 0.05 },
    { geometry: [-90.4125, 38.6103], weight: null },
    { geometry: [-72.6151, 40.9849], weight: 0.05 },
    { geometry: [-74.3118, 41.8586], weight: 0.05 },
    { geometry: [-72.7563, 44.3378], weight: 0.05 },
    { geometry: [-71.3824, 42.4072], weight: 0.05 },
    { geometry: [-81.0755, 29.028], weight: 0.05 },
];

const mapStyles = makeStyles({
    map: {
        width: '100%',
        padding: '50px',
        cursor: 'pointer',
        '@media (max-width: 828px)': {
            padding: '20px',
        },
    },
});

export default function SupportMap() {
    const [mapMode, setMapMode] = useState(MAP);
    const classes = mapStyles();

    const onChangeMode = (event, mode) => {
        setMapMode(mode);
    };

    return (
        <IntroSection title={'Supports map and layer components'}>
            <small>
                For more information, please see the
                {mapMode === MAP ? " 'Map' " : " 'HeatMap' "}
                menu of components.
            </small>
            <IntroTab
                mode={mapMode}
                onChangeMode={onChangeMode}
                label={['Map', 'HeatMap']}
                firstTab={
                    <div className={classes.map}>
                        <OpenLayers
                            claaName={classes.map}
                            isHeatmapMode={false}
                            zoom={12}
                            minZoom={2}
                            maxZoom={19}
                            longitude={127.024792}
                            latitude={37.504296}
                        />
                    </div>
                }
                secondTab={
                    <div className={classes.map}>
                        <HeatMap
                            zoom={3}
                            minZoom={2}
                            maxZoom={17}
                            blur={40}
                            radius={30}
                            longitude={127.024792}
                            latitude={37.504296}
                            pointList={pointList}
                        />
                    </div>
                }
            />
        </IntroSection>
    );
}