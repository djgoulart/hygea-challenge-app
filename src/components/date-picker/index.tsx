import React, { useEffect, useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native'
import dayjs from 'dayjs'
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'

import { DatePickerTrigger } from './trigger'

type DatePickerProps = {
  onChangeEvent?: (date?: Date) => void
  value?: Date
}

export function DatePicker({ onChangeEvent, value }: DatePickerProps) {
  const [date, setDate] = useState<Date>(new Date())

  const dateString = useMemo(() => {
    if (!value) return 'Data de aniversário'
    return dayjs(date).format('DD/MM/YYYY')
  }, [date, value])

  const handleOnChange = (e: DateTimePickerEvent, selectedDate?: Date) => {
    if (e.type === 'set' && selectedDate) {
      setDate(selectedDate)
    }

    onChangeEvent && onChangeEvent(selectedDate)
  }

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: handleOnChange,
      mode: 'date',
      timeZoneName: 'America/Sao_Paulo',
    })
  }

  useEffect(() => {
    if (value) {
      if (typeof value === 'string') {
        setDate(new Date(value))
      } else {
        setDate(value)
      }
    }
  }, [value])

  return (
    <SafeAreaView>
      <DatePickerTrigger onPress={showDatePicker} title={dateString} />
    </SafeAreaView>
  )
}
