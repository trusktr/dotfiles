"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import builtins
import google.protobuf.descriptor
import google.protobuf.message
import typing
import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor = ...

class SourceContext(google.protobuf.message.Message):
    """`SourceContext` represents information about the source of a
    protobuf element, like the file in which it is defined.
    """
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    FILE_NAME_FIELD_NUMBER: builtins.int
    file_name: typing.Text = ...
    """The path-qualified name of the .proto file that contained the associated
    protobuf element.  For example: `"google/protobuf/source_context.proto"`.
    """

    def __init__(self,
        *,
        file_name : typing.Text = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["file_name",b"file_name"]) -> None: ...
global___SourceContext = SourceContext