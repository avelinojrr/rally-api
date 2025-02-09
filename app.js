import express from 'express';
import dotenv from 'dotenv';
import espnRoutes from './src/api/v1/routes/espnRoutes.js';
import lakersRoutes from './src/api/v1/routes/lakersRoutes.js';
import lakersCalendarRoutes from './src/api/v1/routes/lakersCalendarRoutes.js';
import barcelonaRoutes from './src/api/v1/routes/barcelonaRoutes.js';
import barcelonaCalendarRoutes from './src/api/v1/routes/barcelonaCalendarRoutes.js';
import hornetsRoutes from './src/api/v1/routes/hornetsRoutes.js';
import hornetsCalendarRoutes from './src/api/v1/routes/hornetsCalendarRoutes.js';
import interMiamiRoutes from './src/api/v1/routes/interMiamiRoutes.js';
import interMiamiCalendarRoutes from './src/api/v1/routes/interMiamiCalendarRoutes.js';
import kansasCityChiefsRoutes from './src/api/v1/routes/kansasCityChiefsRoutes.js';
import kansasCityChiefsCalendarRoutes from './src/api/v1/routes/kansasCityChiefsCalendarRoutes.js';
import bostonRedSoxRoutes from './src/api/v1/routes/bostonRedSoxRoutes.js';
import bostonRedSoxCalendarRoutes from './src/api/v1/routes/bostonRedSoxCalendarRoutes.js';
import losAngelesDodgersRoutes from './src/api/v1/routes/losAngelesDodgersRoutes.js';
import losAngelesDodgersCalendarRoutes from './src/api/v1/routes/losAngelesDodgersCalendarRoutes.js';
import uefaChampionsRoutes from './src/api/v1/routes/uefaChampionsRoutes.js';
import uefaChampionsCalendarRoutes from './src/api/v1/routes/uefaChampionsCalendarRoutes.js';

import { scheduleDailySync } from './src/api/v1/jobs/syncJob.js';

scheduleDailySync();

dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// ESPN API
app.use('/v1/espn', espnRoutes);

// LAKERS API
app.use('/v1/lakers', lakersRoutes);
app.use('/v1/calendar', lakersCalendarRoutes);

// HORNETS API
app.use('/v1/hornets', hornetsRoutes);
app.use('/v1/calendar', hornetsCalendarRoutes);

// BARCELONA API
app.use('/v1/barcelona', barcelonaRoutes);
app.use('/v1/calendar', barcelonaCalendarRoutes);

// INTER MIAMI API
app.use('/v1/inter-miami', interMiamiRoutes);
app.use('/v1/calendar', interMiamiCalendarRoutes);

// KANSAS CITY CHIEFS API
app.use('/v1/kansas-city-chief', kansasCityChiefsRoutes);
app.use('/v1/calendar', kansasCityChiefsCalendarRoutes);

// BOSTON RED SOX APIw
app.use('/v1/boston-red-sox', bostonRedSoxRoutes);
app.use('/v1/calendar', bostonRedSoxCalendarRoutes);

// LOS ANGELES DODGERS API
app.use('/v1/los-angeles-dodgers', losAngelesDodgersRoutes);
app.use('/v1/calendar', losAngelesDodgersCalendarRoutes);

// UEFA CHAMPIONS API
app.use('/v1/uefa-champions', uefaChampionsRoutes);
app.use('/v1/calendar', uefaChampionsCalendarRoutes);

export default app;
