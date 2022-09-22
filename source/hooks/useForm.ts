import { yupResolver } from '@hookform/resolvers/yup'
import { ValidationMode, useForm as _useForm } from 'react-hook-form'
import * as yup from 'yup'

export type YupType = typeof yup

type UseFormType = {
  yupSchema: (yup: YupType) => yup.ObjectSchema<any>
  mode?: keyof ValidationMode
  defaultValues?: any
}

const useForm = <T extends { [key: string]: any }>({
  yupSchema,
  mode = 'onBlur',
  defaultValues,
}: UseFormType) => {
  const resolver = yupResolver(yupSchema(yup))

  const { control, handleSubmit, formState, getValues, watch, reset } = _useForm({
    mode,
    resolver,
    defaultValues,
  })
  const { errors, isSubmitting } = formState

  const register = (name: keyof T) => ({
    name,
    control,
    error: errors[String(name)]?.message,
  })

  return { register, isSubmitting, handleSubmit, getValues, watch, reset }
}

export default useForm
