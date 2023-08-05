import * as path from 'path'
import { Uri, workspace } from 'vscode'
import { Segment } from './text'

export const getNames = (uri: Uri) => {
  const workspaceFolder = workspace.getWorkspaceFolder(uri)
  if (!workspaceFolder) { throw new Error(`Cannot get a workspace folder for uri: "${uri}"`) }

  const workspaceFolderPath = workspaceFolder.uri.fsPath
  const relativeFilePath = path.parse(path.relative(workspaceFolderPath, uri.fsPath))

  const names = relativeFilePath.dir.split(path.sep)
  names.push(relativeFilePath.name)

  return names.filter(ns => ns.length > 0)
}

export const ensureNames = (uri: Uri) => {
  const namespaces = getNames(uri)
  if (!namespaces) { throw new Error(`Cannot extract names from uri: "${uri}"`) }
  return namespaces
}

export const toNamespace = (names: string[]) => names.join('.')

export const toNamespaceDeclaration = (names: string[]) => `namespace ${toNamespace(names)}`

export const getNamespacesSegments = (uri: Uri): Segment[] => {
  const splinters = getNames(uri)
  if (!splinters) { return [] }
  const segments: Segment[] = []
  const childName = splinters.pop()
  const parentNames = splinters
  if (parentNames.length) {
    segments.push([toNamespaceDeclaration(parentNames)])
  }
  if (childName) {
    segments.push([`structure ${childName} where`, 'deriving Repr, Inhabited, BEq, DecidableEq'])
    segments.push([toNamespaceDeclaration([childName])])
    // segments.push(['namespace Example'])
  }
  return segments
}

