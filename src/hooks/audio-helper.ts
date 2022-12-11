import React from "react";
import SoundPlayer from "react-native-sound";


type SoundFileType = {
  type: 'app-bundle';
  name: string;
  path: string;
  basePath: string;
} | {
  type: 'network';
  name: string;
  path: string;
} | {
  type: 'directory';
  name: string;
  path: NodeRequire;
};


type AudioStatusType = 'loading' | 'success' | 'error' | 'play' | 'pause' | 'next' | 'previous' | 'stop';

interface IUseAudioHelper {
  listSounds: SoundFileType[];
  timeRate?: number;
}


export function useAudioHelper(request:IUseAudioHelper){
  const [listSounds, setListSounds] = React.useState(request.listSounds);
  const [timeRate, setTimeRate] = React.useState(request.timeRate || 15);
  const [status, setStatus] = React.useState<AudioStatusType>('loading');
  const [errorMassage, setErrorMessage] = React.useState('');

   const [duration, setDuration] = React.useState(0);
   const [player, setPlayer] = React.useState<SoundPlayer>(null);

   function playWithPlayer(player: SoundPlayer) {
       if (player) {
           player.play(playComplete);
           setStatus('play');
       }
   }
   
   function initialize() {
       setStatus('loading');
       if (listSounds.length > 0) {
           if (player) {
               player.release();
           }
   
           const callback = (error, player: SoundPlayer) => {
               if (error) {
                   setStatus('error');
                   setErrorMessage(error.message);
                 
               } else {
                   setStatus('success');
                   setErrorMessage('');
                
               }
               player.setSpeed(speed);
               setDuration(player.getDuration());
               playWithPlayer(player);
           }
   
           const currentAudio = listSounds[index];
           // If the audio is a 'require' then the second parameter must be the callback.
           let newPlayer: SoundPlayer = null;
           switch(currentAudio.type) {
               default: break;
               case 'app-bundle':
                   newPlayer = new SoundPlayer(currentAudio.path, currentAudio.basePath, (error) => callback(error, newPlayer));
                   break;
               case 'network':
                   newPlayer = new SoundPlayer(currentAudio.path, null, (error) => callback(error, newPlayer));
                   break;
               case 'directory':
                   newPlayer = new SoundPlayer(currentAudio.path, (error) => callback(error, newPlayer));
                   break;
           }
           if (newPlayer) {
               setPlayer(newPlayer);
           }
       }
   }

          const [currentTime, setCurrentTime] = React.useState(0);
          React.useEffect(() => {
              const interval = setInterval(() => {
                  if (player && status === 'play') {
                      player.getCurrentTime((seconds: number) => {
                          setCurrentTime(seconds);
                      })
                  }
              }, 100);
          
              return () => clearInterval(interval);
          });

          const [speed, setSpeed] = React.useState(1);
          React.useEffect(() => {
              if (player) {
                  player.setSpeed(speed);
              }
          }, [speed]);


      const [index, setIndex] = React.useState(0);
        React.useEffect(() => {
            initialize();
        }, [index]);


        function playComplete(isEnd: boolean) {
          if (isEnd === true) {
              next();
          }
      }
      
      function play() {
          if (player) {
              player.play(playComplete);
              setStatus('play');
          }
      }

            function pause() {
              if (player) {
                  player.pause();
                  setStatus('pause');
              }
          }

            function stop() {
              if (player) {
                  player.stop();
                  setStatus('stop');
              }
          }

          function next() {
            if (player && index < listSounds.length - 1) {
                player.release();
                setCurrentTime(0);
                setStatus('next');
                setIndex(index + 1);
            }
        }

          function previous() {
            if (player && index > 0) {
                player.release();
                setCurrentTime(0);
                setStatus('previous');
                setIndex(index - 1);
            }
          }

            function seekToTime(seconds: number) {
              if (player) {
                  player.setCurrentTime(seconds);
                  setCurrentTime(seconds);
              }
            }

            function increaseTime() {
              if (player) {
                  player.getCurrentTime((seconds) => {
                      if (seconds + timeRate < duration) {
                          seekToTime(seconds + timeRate)
                      } else {
                          seekToTime(duration);
                      }
                  });
              }
          }

          function decreaseTime() {
            if (player) {
                player.getCurrentTime((seconds) => {
                    if (seconds - timeRate > 0) {
                        seekToTime(seconds - timeRate);
                    } else {
                        seekToTime(0);
                    }
                });
            }
        }

        function formatTimeString(value: number) {
          return new Date(value * 1000).toISOString().substr(11, 8)
      }
      
      function getDurationString() {
          return formatTimeString(duration);
      }
      
      function getCurrentTimeString() {
          return formatTimeString(currentTime);
      }
      
      function getCurrentAudioName() {
          return listSounds[index].name;
      }
      
      function isDisabledButtonPlay() {
          return status === 'loading' || status === 'play';
      }
      
      function isDisabledButtonPause() {
          return status === 'loading' || status === 'pause' || status === 'stop';
      }
      
      function isDisabledButtonStop() {
          return status === 'loading' || status === 'stop';
      }
      
      function isDisabledButtonNext() {
          return status === 'loading' || index === listSounds.length - 1;
      }
      
      function isDisabledButtonPrevious() {
          return status === 'loading' || index === 0;
      }

      return {
        status,
        duration,
        currentTime,
        play,
        pause,
        stop,
        next,
        previous,
        increaseTime,
        decreaseTime,
        durationString: getDurationString(),
        currentTimeString: getCurrentTimeString(),
        currentAudioName: getCurrentAudioName(),
        isDisabledButtonPlay: isDisabledButtonPlay(),
        isDisabledButtonPause: isDisabledButtonPause(),
        isDisabledButtonStop: isDisabledButtonStop(),
        isDisabledButtonNext: isDisabledButtonNext(),
        isDisabledButtonPrevious: isDisabledButtonPrevious(),
        seekToTime,
        timeRate,
        speed,
        setSpeed,
    }
}