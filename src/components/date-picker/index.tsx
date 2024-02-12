import React, { useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native'
import dayjs from 'dayjs'
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'

import { DatePickerTrigger } from './trigger'

type DatePickerProps = {
  onChangeEvent?: (e: DateTimePickerEvent, date?: Date) => void
}

export function DatePicker({ onChangeEvent }: DatePickerProps) {
  const [date, setDate] = useState<Date>(new Date())
  const [touched, setTouched] = useState(false)

  const dateString = useMemo(() => {
    if (touched) {
      return dayjs(date).format('DD/MM/YYYY')
    }

    return 'Data de Nascimento'
  }, [date, touched])

  const handleOnChange = (e: DateTimePickerEvent, selectedDate?: Date) => {
    // console.log(e, selectedDate)

    if (e.type === 'set' && selectedDate) {
      setTouched(true)
      setDate(selectedDate)
    }

    onChangeEvent && onChangeEvent(e, selectedDate)
  }

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: handleOnChange,
      mode: 'date',
      timeZoneName: 'America/Sao_Paulo',
    })
  }

  return (
    <SafeAreaView>
      <DatePickerTrigger onPress={showDatePicker} title={dateString} />
    </SafeAreaView>
  )
}
