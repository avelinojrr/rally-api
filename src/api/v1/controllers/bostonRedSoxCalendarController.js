import { createCalendarEvent } from '../services/calendarService.js';
import { getRedSoxCalendarEvents } from '../services/bostonRedSoxService.js';
import { getScoreboard } from '../services/espnServiceMLB.js';

export const createRedSoxCalendarEvent = async (req, res) => {
  try {
    const scoreboardData = await getScoreboard();
    const events = getRedSoxCalendarEvents(scoreboardData);
    if (events.length === 0) {
      return res
        .status(404)
        .json({
          message:
            'No se encontraron eventos de Boston Red Sox para sincronizar',
        });
    }
    const eventToCreate = events[0];
    const calendarResponse = await createCalendarEvent(eventToCreate);
    res
      .status(200)
      .json({
        message: 'Evento creado en Google Calendar exitosamente',
        calendarResponse,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Error al crear el evento en Google Calendar',
        error: error.message,
      });
  }
};
